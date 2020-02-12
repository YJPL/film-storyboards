"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const basswork = require("gulp-basswork");
const size = require("gulp-size");
const uglify = require("gulp-uglify");
//const webpack = require("webpack");
//const webpackconfig = require("./webpack.config.js");
//const webpackstream = require("webpack-stream");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./_site/"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean assets
function clean() {
  return del(["./_site/assets/"]);
}

// Optimize Images
function images() {
  return gulp
    .src("./Illustrations/**/*")
    .pipe(newer("./img"))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }]
      })
    )
    .pipe(gulp.dest("./img"));
}

// CSS task
function css() {
  return gulp
    .src("./src/stb-tachyons.css")
    .pipe(plumber())
    .pipe(basswork())
    .pipe(gulp.dest("./css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(size({gzip: false, showFiles: true, title:"cssnano css"}))
    .pipe(size({gzip: true, showFiles: true, title:"cssnano gzipped css"}))
    .pipe(gulp.dest("./css/"))
    .pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
  return gulp
    .src(["./assets/js/**/*", "./gulpfile.js"])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts

// Jekyll
function jekyll() {
  return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}

// Watch files
function watchFiles() {
  gulp.watch("./src/**/*", css);
  gulp.watch("./assets/js/**/*", gulp.series(scriptsLint));
  gulp.watch(
    [
      "*.html",
      "./_includes/**/*",
      "./_layouts/**/*",
      "./_pages/**/*",
      "./_posts/**/*"
    ],
    gulp.series(jekyll, browserSyncReload)
  );
  gulp.watch("./images/**/*", images);
}

// Tasks
gulp.task("images", images);
gulp.task("js", gulp.series(scriptsLint));
gulp.task("jekyll", jekyll);
gulp.task("clean", clean);

// build
gulp.task(
  "build",
  gulp.series(clean, gulp.parallel(css, images, jekyll))
);

// watch
gulp.task("watch", gulp.parallel(watchFiles, browserSync));

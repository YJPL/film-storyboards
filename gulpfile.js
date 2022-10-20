"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const cp = require("child_process");
const cssnano = require("cssnano");
//const del = require("del");
//const eslint = require("gulp-eslint-new");
const gulp = require("gulp");
const fs = require("fs");
const glob = require("glob");
const path = require("path");
const sharp = require("sharp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const basswork = require("gulp-basswork");
const size = require("gulp-size");
//const uglify = require("gulp-uglify");
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
//function clean() {
//  return del(["./_site/assets/"]);
//}

// Optimize & resize images for PhotoSwipe galleries
// specify transforms
const transforms = [
  {
    src: "./Galleries/*",
    dist: "./img/gallery/_1920x960/",
    options: {
      width: 1920,
      height: 960,
      fit: "cover"
    }
  },
  {
    src: "./Galleries/*",
    dist: "./img/gallery/_960x480/",
    options: {
      width: 960,
      height: 480,
      fit: "cover"
    }
  }
];

// resize images
function images(done) {
  transforms.forEach(function(transform) {
    // if folder does not exist create it with all above folders
    if (!fs.existsSync(transform.dist)) {
      fs.mkdirSync(transform.dist, { recursive: true }, err => {
        if (err) throw err;
      });
    }

    // glob all files
    let files = glob.sync(transform.src);

    // for each file, apply transforms and save to file
    files.forEach(function(file) {
      let filename = path.basename(file);
      sharp(file)
        .resize(transform.options)
        .toFile(`${transform.dist}/${filename}`)
        .catch(err => {
          console.log(err);
        });
    });
  });
  done();
}

// exports (Common JS)
module.exports = {
  resize: images
};

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

// Transpile, concatenate and minify scripts

// Jekyll
function jekyll() {
  return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}

// Watch files
function watchFiles() {
  gulp.watch("./src/**/*", css);
  gulp.watch(
    [
      "*.html",
      'css/**/*.css',
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
gulp.task("css", css);
gulp.task("jekyll", jekyll);
//gulp.task("clean", clean);

// build
gulp.task(
  "build",
  gulp.series(gulp.parallel(css, images, jekyll))
);

// watch
gulp.task("watch", gulp.parallel(watchFiles, browserSync));

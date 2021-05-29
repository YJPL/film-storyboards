# film-storyboards

[![Netlify Status](https://api.netlify.com/api/v1/badges/7fcbd966-df8f-4f27-ae7e-a4642c355aa4/deploy-status)](https://app.netlify.com/sites/film-storyboards/deploys)

This is [Film Storyboards](https://film-storyboards.com) 2020 portfolio site, build with [Jekyll](https://jekyllrb.com) + [TACHYONS](http://tachyons.io), and [alternate](https://github.com/YJPL/alternate) theme.


![Film Storyboards screenshot](images/film-storyboards-screenshot.png)

# Get Started + Development

```
git clone git://github.com/YJPL/film-storyboards.git
cd film-storyboards
(npm install tachyons)
npm start
```
That should do the trick.
Then open another tab in terminal and run

```
bundle exec jekyll serve --watch
```

This will build the site.

This sets up a Jekyll server for dev on port 4000. The site is regenerated every time you save a file.
NOTE: Changing ```_config.yml``` will require a restart of the Jekyll server to see changes.

To restart server, go to terminal tab that server is running in then press

`ctrl+C ⇧  enter`
then you can use custom Gulp.js commands (make sure to install gulp 4):

`gulp build`

This runs a series of tasks: minifies CSS, images and Javascript.


To fire Jekyll with auto-regeneration, use:

`gulp watch`

This command builds the site locally on port 3000, with [Browsersync](https://www.browsersync.io) so you can quickly revise design changes.


# Copyright / License

The content of this project itself, all illustrations & design works are (c) Yves JPL Capelle / [Film Storyboards](https://film-storyboards.com) / [alternatyves outc.](https://alternatyves.com) / [SOFAM](https://www.sofam.be). The underlying source code used to format and display that content is licensed under the [MIT license](https://github.com/YJPL/film-storyboards/blob/master/LICENSE).

<a href="https://www.buymeacoffee.com/alternatyves/" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

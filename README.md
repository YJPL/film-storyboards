# film-storyboards

[![Netlify Status](https://api.netlify.com/api/v1/badges/7fcbd966-df8f-4f27-ae7e-a4642c355aa4/deploy-status)](https://app.netlify.com/sites/film-storyboards/deploys)

This is [Film Storyboards](https://film-storyboards.com) 2020 portfolio site, build with [Jekyll](https://jekyllrb.com) + [TACHYONS](http://tachyons.io), and [alternate](https://github.com/YJPL/alternate) theme.


![Film Storyboards screenshot](images/film-storyboards-screenshot.png)

## Get Started + Development

```
git clone git://github.com/YJPL/film-storyboards.git
cd film-storyboards
(npm install tachyons)
npm start
```
That should do the trick.
Then open another tab in terminal and run

```
bundle exec jekyll serve --livereload
```

This will build the site.

This sets up a Jekyll server for dev on port 4000. The site is regenerated every time you save a file.
NOTE: Changing ```_config.yml``` will require a restart of the Jekyll server to see changes.

To restart server, go to terminal tab that server is running in then press

`ctrl+C ⇧  enter`

Other commands:

- `npm run start` to process Tachyons CSS files, compile and minify CSS, using the `--livereload` command to watch changes locally.

- `npm run minify-js` to compile JavaScript.

## Photoswipe
You can enable Photoswipe on specific post, but you'll have to hardcode each image in said post.

## Images:

Resize, compress etc.

#todo



## Copyright / License

The content of this project itself, all illustrations & design works are © Yves JPL Capelle / [Film Storyboards](https://film-storyboards.com) / [alternatyves outc.](https://alternatyves.com) / [SOFAM](https://www.sofam.be). The underlying source code used to format and display that content is licensed under the [MIT license](https://github.com/YJPL/film-storyboards/blob/master/LICENSE).

<a href="https://www.buymeacoffee.com/alternatyves/" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

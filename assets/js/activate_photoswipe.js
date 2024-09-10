import PhotoSwipeLightbox from './photoswipe_lightbox.esm.min.js';
const options = {
  gallerySelector: '.photoswipe-gallery',
  childSelector: '.photoswipe',
  pswpModule: () => import('./photoswipe.esm.min.js'),
  pswpCSS: '/css/photoswipe.min.css'
};
const lightbox = new PhotoSwipeLightbox(options);
lightbox.init();
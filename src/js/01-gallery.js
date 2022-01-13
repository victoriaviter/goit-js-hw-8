// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const galleryItemsContainer = document.querySelector('.gallery');

const galleryMarkup = makeGalleryMarkup(galleryItems);
addgalleryMarkuptoHtml(galleryMarkup);

function makeGalleryMarkup(pictures) {
  return pictures
    .map(
      ({ preview, original, description }) => `<a class="gallery__item" href=${original}>
  <img class="gallery__image"
  src=${preview} 
  alt=${description} /></a>`,
    )
    .join('');
}
function addgalleryMarkuptoHtml(mup) {
  galleryItemsContainer.innerHTML = mup;
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 150,
});
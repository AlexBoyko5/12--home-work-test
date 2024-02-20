import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a');

export function createGalleryMarkup(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(
      (image) => `
    <div class="photo-card">
      <a href="${image.largeImageURL}" target="_blank">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
       <p><i class="img-text">Likes </i><span>${image.likes}</span></p>
        <p><i class="img-text">Views </i><span>${image.views}</span></p>
        <p><i class="img-text">Comments </i><span>${image.comments}</span></p>
        <p><i class="img-text">Downloads </i><span>${image.downloads}</span></p>
      </div>
    </div>
  `
    )
    .join('');
  lightbox.refresh();
}

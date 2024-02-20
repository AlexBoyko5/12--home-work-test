import { fetchImages } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const lightbox = new SimpleLightbox('.gallery a');

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');

form.addEventListener('submit', (event) => {
    const query = input.value.trim();
    event.preventDefault();
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query',
        });
        return;
    }
    fetchImages(query);
    input.value = '';
});

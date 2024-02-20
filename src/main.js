import { fetchImages } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();
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

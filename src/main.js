import { fetchImages } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const lightbox = new SimpleLightbox('.gallery a');
const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
let query = ''; // Глобальная переменная для хранения запроса пользователя
let page = 1; // Глобальная переменная для хранения текущей страницы

form.addEventListener('submit', (event) => {
    query = input.value.trim();
    page = 1; // Сброс страницы при новом запросе
    event.preventDefault();
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query',
        });
        return;
    }
    fetchImages(query, page);
    input.value = '';
});

// Обработчик события для кнопки Load more
document.querySelector('#load-more').addEventListener('click', () => {
    page += 1;
    fetchImages(query, page);
});
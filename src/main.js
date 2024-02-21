import { fetchImages } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const lightbox = new SimpleLightbox('.gallery a');

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loadMoreBtn = document.getElementById('load-more');
let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query',
        });
        return;
    }
    currentQuery = query;
    currentPage = 1; // Сбрасываем страницу на 1 для нового поиска
    fetchAndRenderImages();
});

loadMoreBtn.addEventListener('click', () => {
    currentPage++;
    fetchAndRenderImages();
});

async function fetchAndRenderImages() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    try {
        // Используем новую функцию fetchImages с параметрами query и page
        const response = await fetchImages(currentQuery, currentPage);
        console.log(response.data);
        loader.style.display = 'none';
        if (response.data && response.data.hits && response.data.hits.length > 0) {
            appendGalleryMarkup(response.data.hits);
            lightbox.refresh();
        } else {
            // Если hits отсутствует или его длина равна нулю, выведите сообщение об отсутствии результатов
            iziToast.info({
                title: 'Info',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        }
    } catch (error) {
        console.error('Error fetching images:', error);
        loader.style.display = 'none';
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please try again later.',
        });
    }
}

async function appendGalleryMarkup(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML += createGalleryMarkup(images);
    // Скрываем или показываем кнопку "Load more" в зависимости от количества изображений
    if (images.length < 15) {
        loadMoreBtn.classList.add('is-hidden');
    } else {
        loadMoreBtn.classList.remove('is-hidden');
    }
}
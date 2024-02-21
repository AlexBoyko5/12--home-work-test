import { fetchImages } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const lightbox = new SimpleLightbox('.gallery a');
const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
let query = ''
let page = 1;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    query = input.value.trim();
    page = 1
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query',
        });
        return;
    }
    try {
        await fetchAndRenderImages();
    } catch (error) {
        console.error('Error fetching images:', error);
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please try again later.',
        });
    }
    input.value = '';
});

document.querySelector('#load-more').addEventListener('click', async () => {
    page += 1;
    try {
        await fetchAndRenderImages();
    } catch (error) {
        console.error('Error fetching images:', error);
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please try again later.',
        });
    }
});

async function fetchAndRenderImages() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    try {
        const response = await fetchImages(query, page);
        console.log(response.data);
        loader.style.display = 'none';
        if (response.data && response.data.hits && response.data.hits.length > 0) {
            appendGalleryMarkup(response.data.hits);
            lightbox.refresh();
            // Если достигнут конец коллекции, скрываем кнопку Load more и выводим сообщение
            if (response.data.totalHits <= page * 15) { // <-- Проверка, достигнут ли конец коллекции
                document.querySelector('#load-more').style.display = 'none'; // <-- Скрываем кнопку Load more
                iziToast.info({
                    title: 'Info',
                    message: "We're sorry, but you've reached the end of search results.", // <-- Выводим сообщение о достижении конца коллекции
                });
            }
        } else {
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
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '42334631-07f239856d3b6a49db441bfb9';
const PER_PAGE = 15;

export async function fetchImages(query, page) {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';

    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${PER_PAGE}`);
        loader.style.display = 'none';
        return response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
        loader.style.display = 'none';
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please try again later.',
        });
        return null; // Возвращаем null вместо выбрасывания ошибки
    }
}


import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32211604-d2703e4dbac144834055a08da';

axios.defaults.baseURL = BASE_URL;

export const fetchApiImg = page => {
    return axios('?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12', {
        params: {
            api_key: API_KEY,
            page,
}
    });
}


// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
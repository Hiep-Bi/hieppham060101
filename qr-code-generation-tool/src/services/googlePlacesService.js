import axios from 'axios';

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const BASE_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
const DETAILS_URL = 'https://maps.googleapis.com/maps/api/place/details/json';

export const fetchBusinessSuggestions = async (input) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                input,
                key: API_KEY,
            },
        });
        return response.data.predictions;
    } catch (error) {
        console.error('Error fetching business suggestions:', error);
        throw error;
    }
};

export const fetchBusinessDetails = async (placeId) => {
    try {
        const response = await axios.get(DETAILS_URL, {
            params: {
                place_id: placeId,
                key: API_KEY,
            },
        });
        return response.data.result;
    } catch (error) {
        console.error('Error fetching business details:', error);
        throw error;
    }
};
// src/services/api.js
import axios from 'axios';

const API_URL = 'https://localhost:5001/api/places';

export const getPlaces = async () => {
    return await axios.get(API_URL);
};

export const getPlaceById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const createPlace = async (place) => {
    return await axios.post(API_URL, place);
};

export const updatePlace = async (id, place) => {
    return await axios.put(`${API_URL}/${id}`, place);
};

export const deletePlace = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};

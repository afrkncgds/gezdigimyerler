// src/components/PlaceList.js
import React, { useEffect, useState } from 'react';
import { getPlaces, deletePlace } from '../services/api';

const PlaceList = ({ onEdit }) => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetchPlaces();
    }, []);

    const fetchPlaces = async () => {
        const response = await getPlaces();
        setPlaces(response.data);
    };

    const handleDelete = async (id) => {
        await deletePlace(id);
        fetchPlaces();
    };

    return (
        <div>
            <h2>Gezdiğim Yerler</h2>
            <ul>
                {places.map(place => (
                    <li key={place.placeId}>
                        {place.name} - {place.placeDetails.map(detail => detail.address).join(', ')}
                        <button onClick={() => onEdit(place)}>Düzenle</button>
                        <button onClick={() => handleDelete(place.placeId)}>Sil</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlaceList;

// src/components/PlaceForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { createPlace, updatePlace } from '../services/api';

const PlaceForm = ({ place, onSave }) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: place || { name: '', placeDetails: [{ address: '' }] }
    });

    const onSubmit = async (data) => {
        if (place) {
            await updatePlace(place.placeId, data);
        } else {
            await createPlace(data);
        }
        onSave();
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Yer Adı</label>
                <input {...register('name')} />
            </div>
            <div>
                <label>Adres</label>
                <input {...register('placeDetails[0].address')} />
            </div>
            <button type="submit">Kaydet</button>
        </form>
    );
};

export default PlaceForm;

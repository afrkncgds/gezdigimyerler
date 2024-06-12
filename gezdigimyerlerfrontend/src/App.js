// src/App.js
import React, { useState } from 'react';
import PlaceList from './components/PlaceList';
import PlaceForm from './components/PlaceForm';

const App = () => {
  const [editingPlace, setEditingPlace] = useState(null);

  const handleEdit = (place) => {
    setEditingPlace(place);
  };

  const handleSave = () => {
    setEditingPlace(null);
  };

  return (
      <div>
        <h1>Gezdiğim Yerler</h1>
        <PlaceForm place={editingPlace} onSave={handleSave} />
        <PlaceList onEdit={handleEdit} />
      </div>
  );
};

export default App;

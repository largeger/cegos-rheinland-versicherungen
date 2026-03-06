// Datei: App.jsx
import React, { useState } from 'react';
import IngredientSelector from './IngredientSelector';
import CocktailPreview from './CocktailPreview';
import CocktailList from './CocktailList';

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  const addIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
  };

  const saveCocktail = () => {
    if (selectedIngredients.length === 0) return;
    const name = prompt("Wie soll dein Cocktail heißen?");
    if (!name) return;
    const newCocktail = { name, ingredients: selectedIngredients };
    setCocktails([...cocktails, newCocktail]);
    setSelectedIngredients([]);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Getränke-Mixer</h1>
      <IngredientSelector onAdd={addIngredient} />
      <CocktailPreview ingredients={selectedIngredients} />
      <button
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
        onClick={saveCocktail}
      >
        Cocktail speichern
      </button>
      <CocktailList cocktails={cocktails} />
    </div>
  );
}

export default App;


// Datei: IngredientSelector.jsx
import React from 'react';

const INGREDIENTS = ['Cola', 'Rum', 'Eis', 'Limette', 'Orangensaft'];

function IngredientSelector({ onAdd }) {
  return (
    <div className="flex gap-2 mb-4">
      {INGREDIENTS.map((ing) => (
        <button
          key={ing}
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => onAdd(ing)}
        >
          {ing}
        </button>
      ))}
    </div>
  );
}

export default IngredientSelector;


// Datei: CocktailPreview.jsx
import React from 'react';

const COLORS = {
  Cola: '#3B2F2F',
  Rum: '#D2B48C',
  Eis: '#ADD8E6',
  Limette: '#A2D149',
  Orangensaft: '#FFA500',
};

function CocktailPreview({ ingredients }) {
  return (
    <div className="border w-32 h-64 relative overflow-hidden rounded">
      {ingredients.map((ing, index) => (
        <div
          key={index}
          className="absolute left-0 w-full"
          style={{
            bottom: `${index * 20}px`,
            height: '20px',
            backgroundColor: COLORS[ing] || '#ccc',
          }}
        ></div>
      ))}
    </div>
  );
}

export default CocktailPreview;


// Datei: CocktailList.jsx
import React from 'react';
import CocktailPreview from './CocktailPreview';

function CocktailList({ cocktails }) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-2">Cocktailkarte</h2>
      <div className="grid grid-cols-2 gap-4">
        {cocktails.map((c, idx) => (
          <div key={idx} className="border p-2 rounded shadow">
            <h3 className="font-bold text-lg mb-1">{c.name}</h3>
            <CocktailPreview ingredients={c.ingredients} />
            <p className="mt-2 text-sm text-gray-700">
              Zutaten: {c.ingredients.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CocktailList;

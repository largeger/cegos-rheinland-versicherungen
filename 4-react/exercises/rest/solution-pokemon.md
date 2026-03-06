## Solution: Pokemon API 🐉

This solution fetches Pokemon data from the PokeAPI, displays it as a paginated list, and fetches individual images for each Pokemon.

### `Pokemon.tsx` (Individual Item Component)

```tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface PokemonProps {
  index: number;
  pokemon: {
    name: string;
    url: string;
  };
}

const Pokemon: React.FC<PokemonProps> = ({ index, pokemon }) => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(pokemon.url);
        // Using front_default sprite
        setImageUrl(response.data.sprites.front_default);
      } catch (error) {
        console.error('Error fetching pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [pokemon.url]);

  return (
    <li style={{ listStyleType: 'none', margin: '10px', display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '10px' }}>#{index + 1}</span>
      {imageUrl && <img src={imageUrl} alt={pokemon.name} style={{ width: '50px', height: '50px' }} />}
      <a href={pokemon.url} target="_blank" rel="noopener noreferrer">
        {pokemon.name.toUpperCase()}
      </a>
    </li>
  );
};

export default Pokemon;
```

### `Pagination.tsx` (Navigation Component)

```tsx
import React from 'react';

interface PaginationProps {
  pageIndex: number;
  numberOfPokemons: number;
  setPageIndex: (index: number) => void;
  pageSize: number;
}

const Pagination: React.FC<PaginationProps> = ({ pageIndex, numberOfPokemons, setPageIndex, pageSize }) => {
  const totalPages = Math.ceil(numberOfPokemons / pageSize);
  const availablePages = [];

  // Create a few page spans for navigation
  for (let i = 0; i < totalPages; i++) {
    availablePages.push(
      <span 
        key={i} 
        onClick={() => setPageIndex(i)}
        style={{
          margin: '0 5px',
          cursor: 'pointer',
          fontWeight: pageIndex === i ? 'bold' : 'normal',
          textDecoration: pageIndex === i ? 'underline' : 'none'
        }}
      >
        {i + 1}
      </span>
    );
  }

  return (
    <div style={{ margin: '20px 0' }}>
      <button disabled={pageIndex === 0} onClick={() => setPageIndex(pageIndex - 1)}>Prev</button>
      {availablePages.slice(Math.max(0, pageIndex - 2), Math.min(totalPages, pageIndex + 3))}
      <button disabled={pageIndex >= totalPages - 1} onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
```

### `PokemonList.tsx` (Main List Component)

```tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import Pagination from './Pagination';

const PAGE_SIZE = 20;

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const offset = pageIndex * PAGE_SIZE;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${PAGE_SIZE}`);
        setPokemonList(response.data.results);
        setTotalCount(response.data.count);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [pageIndex]);

  if (loading) return <div>Gotta catch 'em all... (Loading)</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pokedex</h1>
      
      <Pagination 
        pageIndex={pageIndex} 
        numberOfPokemons={totalCount} 
        setPageIndex={setPageIndex} 
        pageSize={PAGE_SIZE}
      />

      <ul style={{ padding: 0 }}>
        {pokemonList.map((p, i) => (
          <Pokemon key={p.name} index={pageIndex * PAGE_SIZE + i} pokemon={p} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
```

### Setup Instructions

1.  **Dependencies**: `npm install axios`
2.  **Usage**: Render `<PokemonList />` in your main `App.tsx` file.

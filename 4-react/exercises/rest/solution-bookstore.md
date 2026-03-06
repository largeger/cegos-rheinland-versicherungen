## Solution: Online Bookstore 📕

This solution uses `axios` for API calls and `useState`/`useEffect` for state management.

### `BookStore.tsx` (Main Component)

```tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Book {
  id?: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  price: number;
}

const API_URL = 'http://localhost:3001/books';

const BookStore: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newBook, setNewBook] = useState<Book>({
    title: '',
    author: '',
    genre: '',
    description: '',
    price: 0
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_URL);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_URL}?q=${searchTerm}`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  const handleCreateBook = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, newBook);
      setNewBook({ title: '', author: '', genre: '', description: '', price: 0 });
      fetchBooks();
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  const handleUpdateBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBook) return;
    try {
      await axios.put(`${API_URL}/${editingBook.id}`, editingBook);
      setEditingBook(null);
      fetchBooks();
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const handleDeleteBook = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Online Bookstore</h1>

      {/* Search Section */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search books..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Create / Edit Form */}
      <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h2>{editingBook ? 'Edit Book' : 'Add New Book'}</h2>
        <form onSubmit={editingBook ? handleUpdateBook : handleCreateBook}>
          <input 
            type="text" placeholder="Title" required
            value={editingBook ? editingBook.title : newBook.title}
            onChange={(e) => editingBook 
              ? setEditingBook({...editingBook, title: e.target.value})
              : setNewBook({...newBook, title: e.target.value})}
          /><br/>
          <input 
            type="text" placeholder="Author" required
            value={editingBook ? editingBook.author : newBook.author}
            onChange={(e) => editingBook 
              ? setEditingBook({...editingBook, author: e.target.value})
              : setNewBook({...newBook, author: e.target.value})}
          /><br/>
          <input 
            type="text" placeholder="Genre" required
            value={editingBook ? editingBook.genre : newBook.genre}
            onChange={(e) => editingBook 
              ? setEditingBook({...editingBook, genre: e.target.value})
              : setNewBook({...newBook, genre: e.target.value})}
          /><br/>
          <input 
            type="number" placeholder="Price" step="0.01" required
            value={editingBook ? editingBook.price : newBook.price}
            onChange={(e) => editingBook 
              ? setEditingBook({...editingBook, price: parseFloat(e.target.value)})
              : setNewBook({...newBook, price: parseFloat(e.target.value)})}
          /><br/>
          <textarea 
            placeholder="Description"
            value={editingBook ? editingBook.description : newBook.description}
            onChange={(e) => editingBook 
              ? setEditingBook({...editingBook, description: e.target.value})
              : setNewBook({...newBook, description: e.target.value})}
          /><br/>
          <button type="submit">{editingBook ? 'Update' : 'Create'}</button>
          {editingBook && <button onClick={() => setEditingBook(null)}>Cancel</button>}
        </form>
      </div>

      {/* Book List */}
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ marginBottom: '10px' }}>
            <strong>{book.title}</strong> by {book.author} ({book.genre}) - ${book.price}
            <br />
            <button onClick={() => setEditingBook(book)}>Edit</button>
            <button onClick={() => book.id && handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookStore;
```

### Setup Instructions

1.  **Backend**:
    *   Ensure `db-bookstore.json` is in your project.
    *   Start `json-server`: `npx json-server --watch db-bookstore.json --port 3001`
2.  **Frontend**:
    *   Install Axios: `npm install axios`
    *   Include the `BookStore` component in your `App.tsx`.

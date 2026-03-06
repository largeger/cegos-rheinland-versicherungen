## Exercise: Online Bookstore 📕

### Backend Setup (json-server)
1. Install json-server: Run `npm install -g json-server` or use it via npx.
2. Prepare Data: Use the provided `db-bookstore.json` file as your database.
3. Start the Server: Run the following command in your terminal:
   ```bash
   npx json-server --watch db-bookstore.json --port 3001
   ```
4. REST API Endpoints: The json-server will automatically provide CRUD operations for books:
   - `GET /books`: Retrieve a list of all books.
   - `POST /books`: Create a new book entry.
   - `GET /books/{id}`: Retrieve details of a specific book.
   - `PUT /books/{id}`: Update details of a specific book.
   - `PATCH /books/{id}`: Partially update a specific book.
   - `DELETE /books/{id}`: Delete a specific book.
5. **Test your backend by visiting `http://localhost:3001/books` before moving on!**

### Tasks in Frontend (React)
1. UI Components: Design React components for the online bookstore (e.g., book list, book details view, book search, book creation form).
2. API Integration: Use Axios to communicate with the backend and perform CRUD operations on books.
3. Display Books: Fetch books from the backend and display them in the UI (book list) with details such as title, author, genre, and price.
4. Search and Filter: Implement functionality to search for books by title, author, or genre using API calls from the frontend.
5. Create, Update, Delete Books: Implement functionality to create, update, and delete books using API calls from the frontend.

### General Steps
1. Set up the backend using json-server with the provided `db-bookstore.json`.
2. Verify that the server is running and the book data is accessible.
3. Set up the React frontend, design UI components, and integrate them with the backend APIs using Axios or fetch.
4. Test the application to ensure that books can be created, retrieved, updated, and deleted from the frontend, and the changes are reflected in the json-server data.

### Bonus ideas & challenges
1. Implement pagination for displaying books in the frontend (json-server supports `_page` and `_limit`).
2. Add search and filtering logic using json-server's query parameters (e.g., `?q=searchterm`).
3. Implement a shopping cart feature for users to select and purchase books.
4. Enhance the UI with responsive design using CSS frameworks like Bootstrap or Tailwind CSS.

This exercise provides practical experience in building an online bookstore application with json-server for the backend and React for the frontend. It covers essential CRUD operations, search functionalities, and API integration between the frontend and backend systems.

import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {

  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooksAfterDelete = books.filter((book)=>{
      return book.id!==id
    })

    setBooks(updatedBooksAfterDelete);
  }

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id:Math.round(Math.random()*9999),
        title:title
      }
    ]
    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <BookList books={books} onDelete = {deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

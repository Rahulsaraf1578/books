import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {

  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) =>{
    const updatedBooks = books.map((book)=>{
      if(book.id === id){
        return {...book, title:newTitle}
      }

      return book;
    });

    setBooks(updatedBooks);
  }

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
      <h1>Reading list</h1>
      <BookList books={books} onDelete = {deleteBookById} onEdit = {editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

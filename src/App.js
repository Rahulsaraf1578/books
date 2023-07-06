import { useState } from "react";
import BookCreate from "./Components/BookCreate";

function App() {

  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {id:1,title:title}
    ]
    setBooks(updatedBooks);
  }

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

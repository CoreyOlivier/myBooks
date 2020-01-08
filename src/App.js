import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { BookCard } from "./components/BookCard";
import { getBookByTitle } from "./utils/Api";

function App() {
  const [book, setBook] = React.useState({});
  React.useEffect(() => {
    getBookByTitle("dune").then(result => {
      setBook(result);
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">Hello!</div>
      <BookCard book={book} />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { BookCard } from "./components/BookCard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">Hello!</div>
      <BookCard />
    </BrowserRouter>
  );
}

export default App;

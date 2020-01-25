import React from "react";
// import logo from './logo.svg';
import "./App.css";
import QuoteSearcher from "./components/QuoteSearcher";

function App() {
  return (
    <div className="App">
      <div className="Title">
        <hi>Quotes</hi>
      </div>
      <QuoteSearcher />
      <div>I am still alive...</div>
    </div>
  );
}

export default App;

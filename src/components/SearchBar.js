import './SearchBar.css';
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    // prevents page from reloading
    event.preventDefault();
    onSubmit(term)

    // console.log(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleNewSearch = () => {
    setTerm("");
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
       <button style={{background: 'green', height: 50, width: 100, margin: 20, fontSize: 16}} onClick={handleNewSearch}>RESET</button>
      <h1 style={{textTransform: "capitalize", letterSpacing: ".2rem"}}>{term}</h1>
    </div>
   
  );
}

export default SearchBar;

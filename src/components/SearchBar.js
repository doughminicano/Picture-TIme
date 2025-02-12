import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    // prevents page from reloading
    event.preventDefault();
    onSubmit(term);

    // console.log(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleNewSearch = () => {
    setTerm("");
  };

  return (
    // Search Bar
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>
          <h3>Enter Search Term</h3>
        </label>
        <input value={term} onChange={handleChange} />
      </form>

      {/* Instructions */}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            color: "red",
            height: 200,
            width: 200,
            margin: 20,
            fontFamily: "roboto",
            fontSize: 20,
          }}
        >
          <p>
            <h3>Instructions:</h3> Enter a search term and press enter to search
            for images. Press RESET to clear the search term.
          </p>
        </div>
        <button
          style={{
            background: "red",
            height: 50,
            width: 150,
            margin: 20,
            fontSize: 20,
          }}
          onClick={handleNewSearch}
        >
          RESET
        </button>
      </div>
      <div
        style={{
          borderBottom: "2px solid red",
        }}
      ></div>
      <h1
        style={{
          textTransform: "uppercase",
          letterSpacing: "3rem",
          textAlign: "center",
        }}
      >
        {term}
      </h1>
      <div
        style={{
          borderBottom: "2px solid red",
        }}
      ></div>
    </div>
  );
}

export default SearchBar;

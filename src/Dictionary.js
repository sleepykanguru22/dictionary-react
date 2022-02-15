import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [searchResults, setSearchResults] = useState(null);

  function handleResponse(response) {
    setSearchResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyWord(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <p>Hello from Dictionary</p>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyWord} />
        <input type="submit" />
      </form>
      <Results results={searchResults} />
    </div>
  );
}

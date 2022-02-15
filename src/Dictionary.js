import axios from "axios";
import React, { useState } from "react";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
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
    </div>
  );
}

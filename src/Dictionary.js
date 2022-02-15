import React, { useState } from "react";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`);
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

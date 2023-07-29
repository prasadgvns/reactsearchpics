import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
    setTerm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;

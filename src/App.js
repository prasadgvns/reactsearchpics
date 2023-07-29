import { useState } from "react";

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

import searchImages from "./api";

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = (term) => {
    setImages(searchImages(term));
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageList images={images} />
    </div>
  );
}

export default App;

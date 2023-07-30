import { useState } from "react";

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

import searchImages from "./api";

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (term) => {
    const images = await searchImages(term);
    setImages(images);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageList images={images} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import styles from "./SearchBar.module.scss"
const SearchBar = ({ onSearch }) => {

  const [city, setCity] = useState('');

  const handleSearch = () => city && onSearch(city);
  
  return (
    <div className={styles.container}>

      <input
        className={styles.buscador}
        type="search"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button
        className={styles.boton}
        onClick={handleSearch}>
        Search
      </button>

    </div>
  );
}

export default SearchBar
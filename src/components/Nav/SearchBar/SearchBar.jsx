import React, { useState } from "react";
import styles from "./SearchBar.module.scss"
export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form className={styles.container} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        className={styles.buscador}
        type="search"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input
        className={styles.boton}
        type="submit"
        value="Search"
      />

    </form>
  );
}

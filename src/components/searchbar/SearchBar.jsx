import React from 'react';
import styled from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className={styled.SearchBar} >
      <input type='search' value={inputValue} onChange={handleChange}/>
      <button onClick={()=>onSearch(inputValue)}>Agregar</button>
    </div>
  );
}

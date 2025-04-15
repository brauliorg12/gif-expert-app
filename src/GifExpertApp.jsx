import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import './GifExpertApp.css';

/**
 * @returns {JSX.Element}
 * @description GifExpertApp component by React
 * @description This component is a simple app that allows you to search for gifs by category.
 * @example <GifExpertApp />
 */
const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    // Evitar agregar la misma categoria
    if (categories.includes(newCategory)) return;
    // Agregar la nueva categoria
    setCategories((cat) => [newCategory, ...cat]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>

      {/* Add Category */}
      <AddCategory onNewCategoryFn={onAddCategory} />

      {/* Listado de Categorias / Gifs */}
      {categories?.length > 0 && <p>Listado de Gifs:</p>}

      {categories.map((category, index) => (
        <GifGrid key={index + 1} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;

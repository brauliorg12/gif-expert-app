import { useState } from 'react';

export const AddCategory = ({ onNewCategoryFn }) => {
  const [inputValue, setInputValue] = useState('');

  // Funcion que se ejecuta al cambiar el valor del input
  // Se utiliza para actualizar el estado del input
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmitFn = (event) => {
    // Evitar el comportamiento por defecto del formulario
    event.preventDefault();
    // Evitar enviar menos de 1 caracter
    if (inputValue.trim().length <= 1) return;

    // Limpiar el input
    setInputValue('');

    // Emitir el evento onNewCategory
    onNewCategoryFn(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmitFn} aria-label="form">
      {/* Input */}
      <input
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};

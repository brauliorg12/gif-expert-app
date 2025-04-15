/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    // 1. Inicializar el componente
    render(<AddCategory onNewCategoryFn={() => {}} />);
    // 2. Obtener el input
    const input = screen.getByRole('textbox');
    // 3. Simular el cambio de valor del input
    fireEvent.input(input, { target: { value: 'Hola Mundo' } });
    // 4. Comprobar que el valor del input ha cambiado
    expect(input.value).toBe('Hola Mundo');
  });
  test('debe de llamar onNewCategoryFn si el input tiene un valor', () => {
    // 1. Crear la funcion onNewCategoryFn
    const onNewCategoryFn = jest.fn();
    // 2. Renderizar el componente
    render(<AddCategory onNewCategoryFn={onNewCategoryFn} />);
    // 3. Obtener el input
    const input = screen.getByRole('textbox');
    // 4. Simular el cambio de valor del input
    fireEvent.input(input, { target: { value: 'Hola Mundo' } });
    // 5. Simular el submit del formulario
    fireEvent.submit(screen.getByRole('form'));
    // 6. Comprobar que la funcion onNewCategoryFn ha sido llamada
    expect(onNewCategoryFn).toHaveBeenCalled();
  });
  test('no debe de llamar onNewCategoryFn si el input esta vacio', () => {
    // 1. Crear la funcion onNewCategoryFn
    const onNewCategoryFn = jest.fn();
    // 2. Renderizar el componente
    render(<AddCategory onNewCategoryFn={onNewCategoryFn} />);
    // 3. Obtener el input
    // const input = screen.getByRole('textbox');
    // 4. Simular el submit del formulario
    fireEvent.submit(screen.getByRole('form'));
    // 5. Comprobar que la funcion onNewCategoryFn no ha sido llamada
    expect(onNewCategoryFn).not.toHaveBeenCalled();
  });
  test('debe de limpiar la caja de texto al hacer submit', () => {
    // 1. Crear la funcion onNewCategoryFn
    const onNewCategoryFn = jest.fn();
    // 2. Renderizar el componente
    render(<AddCategory onNewCategoryFn={onNewCategoryFn} />);
    // 3. Obtener el input
    const input = screen.getByRole('textbox');
    // 4. Simular el cambio de valor del input
    fireEvent.input(input, { target: { value: 'Hola Mundo' } });
    // 5. Simular el submit del formulario
    fireEvent.submit(screen.getByRole('form'));
    // 6. Comprobar que el valor del input ha cambiado
    expect(input.value).toBe('');
  });
  test('debe de mostrar el valor del input', () => {
    // 1. Crear la funcion onNewCategoryFn
    const onNewCategoryFn = jest.fn();
    // 2. Renderizar el componente
    render(<AddCategory onNewCategoryFn={onNewCategoryFn} />);
    // 3. Obtener el input
    const input = screen.getByRole('textbox');
    // 4. Comprobar que el valor del input es el esperado
    expect(input.value).toBe('');
  });
});

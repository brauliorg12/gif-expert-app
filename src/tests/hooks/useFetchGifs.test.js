/* eslint-disable no-undef */
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { images, isLoading } = result.current;

    expect(images).toEqual([]);
    expect(isLoading).toBeTruthy();
  });

  test('debe de retornar un arreglo de imagenes y isLoading en false', async () => {
    const { result } = renderHook(() =>
      useFetchGifs('One Punch')
    );
    await waitFor(() => expect(result.current.isLoading).toBeFalsy(), {
      timeout: 10000,
    });

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});

/* eslint-disable no-undef */
import { getGifs } from "../../helpers/getGifs";

describe('Pruebas de getGifs', () => {
  test('debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(2);
  });

  test('debe de retornar un arreglo de gifs con los datos correctos', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});

/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('Pruebas en <GifItem />', () => {
  test('debe de hacer match con el snapshot', () => {
    const title = 'Example Title';
    const url = 'https://example.com/image.jpg';

    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    const title = 'Example Title';
    const url = 'https://example.com/image.jpg';

    const { getByRole } = render(<GifItem title={title} url={url} />);
    const { src, alt } = getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('debe de mostrar el título en el componente', () => {
    const title = 'Example Title';
    const url = 'https://example.com/image.jpg';

    const { getByText } = render(<GifItem title={title} url={url} />);
    expect(getByText(title)).toBeTruthy();
  });
});

import { render } from '@testing-library/react';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  test('debe de hacer match con el snapshot', () => {
    // Renderizar el componente
    const { container } = render(<GifExpertApp />);
    // Hacer match con el snapshot
    expect(container).toMatchSnapshot();
  });
});

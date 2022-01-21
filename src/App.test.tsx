import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('<Map />', () => {
  it('should render the map after the loading spinner', async () => {
    render(<App />);

    const loadingSpinner = screen.getByAltText(/carregando mapa/i);
    expect(loadingSpinner).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('main-container')).toBeInTheDocument();
    })

    const instructions = screen.getByTestId('instructions');
    const subtitleText = screen.getByTestId('subtitle-text');
    const buttonReset = screen.getByTestId('button-reset');

    expect(subtitleText).toHaveTextContent('Modo: Redes');
    expect(instructions).toBeInTheDocument();
    expect(subtitleText).toBeInTheDocument();
    expect(buttonReset).toBeInTheDocument();
  })
});
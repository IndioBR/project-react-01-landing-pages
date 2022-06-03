import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  debug();
  const headingContainer = screen.getByRole('heading', {
    name: 'hello',
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryBg,
  });
  //OU
  //expect(headingContainer).toMatchSnapshot() --- Para testar estilo
  //OU
  //expect(headingContainer).toHaveStyleRule('background', 'red') --- Para testar um estilo específico
});

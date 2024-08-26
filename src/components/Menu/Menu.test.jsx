import { screen } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu>children</Menu>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

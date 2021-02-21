import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../components/Header';

describe('Testa o Header com sucesso', () => {
  it('Deveria renderizar', () => {
    const HeaderText = 'Breaking bad wiki';
    const { container } = render(<Header/> );

    const header = screen.getByText(HeaderText);

    expect(header).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

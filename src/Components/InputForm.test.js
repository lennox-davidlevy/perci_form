import { render, screen } from '@testing-library/react';
import App from '../App';
describe('Input form should', () => {
  it('display a "Gender" dropdown', () => {
    render(<App />);
    const genderInput = screen.getByLabelText('Gender *');
    expect(genderInput).toBeInTheDocument();
  });
  it('display a "Title *" input', () => {
    render(<App />);
    const titleInput = screen.getByLabelText('Title *');
    expect(titleInput).toBeInTheDocument();
  });
  it('display a "Brand" input', () => {
    render(<App />);
    const brandInput = screen.getByLabelText('Brand');
    expect(brandInput).toBeInTheDocument();
  });
  it('display a "SEO Keywords" input', () => {
    render(<App />);
    const seoInput = screen.getByLabelText('SEO Keywords');
    expect(seoInput).toBeInTheDocument();
  });
  it('display a "Tone *" dropdown', () => {
    render(<App />);
    const toneInput = screen.getByLabelText('Tone *');
    expect(toneInput).toBeInTheDocument();
  });
  it('display a "Product characteristics *" input', () => {
    render(<App />);
    const characteristicsInput = screen.getByLabelText(
      'Product characteristics *'
    );
    expect(characteristicsInput).toBeInTheDocument();
  });
});

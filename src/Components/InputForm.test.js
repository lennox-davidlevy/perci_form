import { render, screen } from '@testing-library/react';
import InputForm from './InputForm';
describe('Input form should', () => {
  it('display a "Gender" dropdown', () => {
    render(<InputForm />);
    const genderInput = screen.getByLabelText('Gender *');
    expect(genderInput).toBeInTheDocument();
  });
  it('display a "Title *" input', () => {
    render(<InputForm />);
    const titleInput = screen.getByLabelText('Title *');
    expect(titleInput).toBeInTheDocument();
  });
  it('display a "Brand" input', () => {
    render(<InputForm />);
    const brandInput = screen.getByLabelText('Brand');
    expect(brandInput).toBeInTheDocument();
  });
  it('display a "SEO Keywords" input', () => {
    render(<InputForm />);
    const seoInput = screen.getByLabelText('SEO Keywords');
    expect(seoInput).toBeInTheDocument();
  });
  it('display a "Tone *" dropdown', () => {
    render(<InputForm />);
    const toneInput = screen.getByLabelText('Tone *');
    expect(toneInput).toBeInTheDocument();
  });
  it('display a "Product characteristics *" input', () => {
    render(<InputForm />);
    const characteristicsInput = screen.getByLabelText(
      'Product characteristics *'
    );
    expect(characteristicsInput).toBeInTheDocument();
  });
});

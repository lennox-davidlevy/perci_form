import React, { useState } from 'react';
const InputForm = () => {
  const [formValues, setFormValues] = useState({
    gender: 'Womens',
    title: '',
    brand: '',
    tone: 'Straightforward',
    seo_text: '',
    characteristic_text: '',
    characteristic: new Set(),
    seo: new Set(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const handleAddToSet = (name, value) => {
    const newSet = new Set(formValues[name]).add(value);
    setFormValues((prevValues) => {
      return { ...prevValues, [name]: newSet };
    });
  };

  const handleDeleteFromSet = (name, value) => {
    const newSet = new Set(formValues[name]);
    newSet.delete(value);
    setFormValues((prevValues) => {
      return { ...prevValues, [name]: newSet };
    });
  };

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    const { value, name } = e.target;
    handleAddToSet(name.split('_')[0], value.toLowerCase());
    setFormValues((prevValues) => {
      return { ...prevValues, [name]: '' };
    });
  };

  return (
    <div className="form_container">
      <form>
        <label htmlFor="gender_select">Gender *</label>
        <select
          name="gender"
          id="gender_select"
          value={formValues.gender}
          onChange={handleChange}
        >
          <option value="Womens">Womens</option>
          <option value="Mens">Mens</option>
          <option value="Unisex">Unisex</option>
        </select>
        <label htmlFor="title_input">Title *</label>
        <input
          type="text"
          id="title_input"
          value={formValues.title}
          name="title"
          onChange={handleChange}
        />
        <label htmlFor="brand_input">Brand</label>
        <input
          type="text"
          id="brand_input"
          value={formValues.brand}
          name="brand"
          onChange={handleChange}
        />
        <label htmlFor="seo_input">SEO Keywords</label>
        <input
          type="text"
          id="seo_input"
          value={formValues.seo_text}
          onChange={handleChange}
          name="seo_text"
          onKeyDown={handleKeyDown}
          placeholder="Enter"
        />
        {[...formValues.seo].map((item) => (
          <div
            className="seo_items"
            key={item}
            onClick={() => handleDeleteFromSet('seo', item)}
          >
            {item}
          </div>
        ))}
        <label htmlFor="tone_select">Tone *</label>
        <select
          name="tone"
          id="tone_select"
          value={formValues.tone}
          onChange={handleChange}
        >
          <option value="Straightforward">Straightforward</option>
          <option value="Friendly">Friendly</option>
          <option value="Cute">Cute</option>
          <option value="Poetic">Poetic</option>
          <option value="Luxe">Luxe</option>
          <option value="Romantic">Romantic</option>
        </select>
        <label htmlFor="characteristics_input">Product characteristics *</label>
        <input
          name="characteristic_text"
          type="text"
          id="characteristics_input"
          onKeyDown={handleKeyDown}
          value={formValues.characteristic_text}
          onChange={handleChange}
          placeholder="Enter"
        />
        {[...formValues.characteristic].map((item) => (
          <div
            className="characteristic_items"
            key={item}
            onClick={() => handleDeleteFromSet('characteristic', item)}
          >
            {item}
          </div>
        ))}
      </form>
    </div>
  );
};

export default InputForm;

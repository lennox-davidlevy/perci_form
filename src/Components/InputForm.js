import { gender, tone } from '../utilities';
const InputForm = ({ formValues, setFormValues, submitData, clearData }) => {
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

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      form.elements[index + 1].focus();
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData(formValues);
  };

  return (
    <div className="component_container">
      <div className="component_title">Description Input</div>
      <form>
        <label htmlFor="gender_select">Gender *</label>
        <select
          name="gender"
          id="gender_select"
          value={formValues.gender}
          onChange={handleChange}
        >
          {gender.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label htmlFor="title_input">Title *</label>
        <input
          type="text"
          id="title_input"
          value={formValues.title}
          name="title"
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <label htmlFor="brand_input">Brand</label>
        <input
          type="text"
          id="brand_input"
          value={formValues.brand}
          name="brand"
          onChange={handleChange}
          onKeyDown={handleEnter}
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
        <div className="list_items">
          {[...formValues.seo].map((item) => (
            <div
              className="list_item"
              key={item}
              onClick={() => handleDeleteFromSet('seo', item)}
            >
              {item}
            </div>
          ))}
        </div>
        <label htmlFor="tone_select">Tone *</label>
        <select
          name="tone"
          id="tone_select"
          value={formValues.tone}
          onChange={handleChange}
        >
          {tone.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
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
        <div className="list_items">
          {[...formValues.characteristic].map((item) => (
            <div
              className="list_item"
              key={item}
              onClick={() => handleDeleteFromSet('characteristic', item)}
            >
              {item}
            </div>
          ))}
        </div>
      </form>
      <div className="button_group">
        <button
          disabled={
            formValues.title === '' || formValues.characteristic.size === 0
          }
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
        <button onClick={clearData}>CLEAR</button>
      </div>
    </div>
  );
};

export default InputForm;

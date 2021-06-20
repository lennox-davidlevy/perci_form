import { useState } from 'react';
import axios from 'axios';
import InputForm from './Components/InputForm';
import Output from './Components/Output';
import './App.css';

function App() {
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

  const submitData = (data) => {
    let { characteristic, seo } = data;
    characteristic = Array.from(characteristic);
    seo = Array.from(seo);
    data = { ...data, characteristic, seo };
    axios
      .post('/synonym', data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className="app_container">
      <div className="app_header">Perci.ai</div>
      <InputForm
        formValues={formValues}
        setFormValues={setFormValues}
        submitData={submitData}
      />
      <Output />
    </div>
  );
}

export default App;

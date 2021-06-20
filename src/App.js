import { useState } from 'react';
import axios from 'axios';
import InputForm from './Components/InputForm';
import Output from './Components/Output';
import './App.css';
const initialState = {
  gender: 'Womens',
  title: '',
  brand: '',
  tone: 'Straightforward',
  seo_text: '',
  characteristic_text: '',
  characteristic: new Set(),
  seo: new Set(),
};
function App() {
  const [formValues, setFormValues] = useState(initialState);
  const [output, setOutput] = useState([]);
  const [page, setPage] = useState(0);

  const submitData = (data) => {
    let { characteristic, seo } = data;
    characteristic = Array.from(characteristic);
    seo = Array.from(seo);
    data = { ...data, characteristic, seo };
    axios
      .post('/synonym', data)
      .then((response) => {
        setOutput(response.data);
      })
      .catch((err) => console.log(err));
  };
  const clearData = (e) => {
    e.preventDefault();
    setFormValues(initialState);
    setOutput([]);
    setPage(0);
  };

  return (
    <div className="app_container">
      <InputForm
        formValues={formValues}
        setFormValues={setFormValues}
        submitData={submitData}
        clearData={clearData}
      />
      <Output data={output} page={page} setPage={setPage} />
    </div>
  );
}

export default App;

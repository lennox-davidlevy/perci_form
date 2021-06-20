import React from 'react';

const OutputDisplay = ({ data }) => {
  const { gender, title, brand, characteristic, tone, seo } = data;
  let outputDisplayRender = <div className="output_display_container"></div>;
  return (
    <div className="ouput_display_container">
      <div>Output display</div>
      <div className="output_display_container">
        <div>Gender: {gender}</div>
        <div>Title: {title}</div>
        <div>Brand: {brand}</div>
        <div>
          SEO Keywords:
          <ul>
            {seo.map((item, index) => (
              <li key={item + index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>Tone: {tone}</div>
        <div>
          Characteristics:
          <ul>
            {characteristic.map((item, index) => (
              <li key={item + index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OutputDisplay;

import React from 'react';

const OutputDisplay = ({ data }) => {
  const { gender, title, brand, characteristic, tone, seo } = data;
  return (
    <div>
      <div>Output display</div>
      <div className="output_display_container">
        <div>{gender}</div>
        <div>{title}</div>
        <div>{brand}</div>
        <div>
          {seo.map((item, index) => (
            <div key={item + index}>{item}</div>
          ))}
        </div>
        <div>{tone}</div>
        <div>
          {characteristic.map((item, index) => (
            <div key={item + index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutputDisplay;

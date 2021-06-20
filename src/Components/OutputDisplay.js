import React, { useState } from 'react';

const OutputDisplay = ({ data, completeData, showJSON }) => {
  const { gender, title, brand, characteristic, tone, seo } = data;
  const htmlDisplay = (
    <div className="ouput_display_container">
      <div>
        <b>Output display</b>
      </div>
      <div className="text_display">
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
  const jsonDisplay = (
    <div className="ouput_display_container">
      <pre>{JSON.stringify(completeData, null, 2)}</pre>
    </div>
  );

  return (
    <div className="display_container">
      {!showJSON ? htmlDisplay : jsonDisplay}
    </div>
  );
};

export default OutputDisplay;

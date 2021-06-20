import React, { useState } from 'react';
import OutputDisplay from './OutputDisplay';

const Output = ({ data, page, setPage }) => {
  const pageDown = (e) => {
    e.preventDefault();
    if (data.length === 0) return;
    if (page > 0) setPage(page - 1);
  };
  const pageUp = (e) => {
    e.preventDefault();
    if (data.length === 0) return;
    if (page < 3) setPage(page + 1);
  };
  return (
    <div className="component_container">
      <div className="component_title">GTP-3 arguments</div>
      {data.length === 0 && <div className="ouput_display_container"></div>}
      {data.length > 0 && <OutputDisplay data={data[page]} />}
      <div className="change_page_container">
        <button onClick={pageDown}>Prev Page</button>
        <div className="page_number">{page + 1}</div>
        <button onClick={pageUp}>Next Page</button>
      </div>
    </div>
  );
};

export default Output;

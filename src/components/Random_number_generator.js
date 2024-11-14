import React from 'react';

const Random_number_generator = ({ on_generate, max, min, set_max, set_min }) => {
  return (
    <div className="console-input-container">
      <h1> Random Number Generator</h1>

      <button onClick={on_generate} disabled={max - min < 1}>Generate Random Number</button><br />
      <input
        onChange={(evt) => set_max(parseInt(evt.target.value))}
        type="number"
        value={max}
        placeholder="Enter the max value"
      /><span>Max Value</span><br />
      <input
        onChange={(evt) => set_min(parseInt(evt.target.value))}
        type="number"
        value={min}
        placeholder="Enter the min value"
      /><span>Min Value</span><br />
    </div>
  );
}

export default Random_number_generator;

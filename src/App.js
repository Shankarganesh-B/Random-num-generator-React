import React, { useState } from 'react';
import Random_number_generator from './components/Random_number_generator';
import Generated_numbers from './components/Generated_numbers';
import './index.css';

function App() {
  const [output, set_output] = useState(0);
  const [max, set_max] = useState(0);
  const [min, set_min] = useState(0);
  const [generated_numbers, set_generated_numbers] = useState([]);
  

  const generate = () => {
    if (max - min < 1) {
      return;
    }
    const random_num = Math.floor(Math.random() * (max - min + 1)) + min;
    set_generated_numbers((prev_numbers) => [...prev_numbers, random_num]);
    set_output(random_num);
  }

  return (
    <div className="console-container">
      <Random_number_generator
        on_generate={generate}
        max={max}
        min={min}
        set_max={set_max}
        set_min={set_min}
      />
      <h2>Latest Generated Number: {output}</h2>
      <Generated_numbers numbers={generated_numbers} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

export default function Transaction() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <p className='bg-black text-white'>Input your total amount</p>
      <input className='mt-4 rounded-lg' type="text" value={inputValue} onChange={handleInputChange} />
      
    </div>
  );
}
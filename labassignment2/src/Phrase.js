import React, { useState } from 'react';
import './App.css';

const Phrase = () => {
  const [phrase, setPhrase] = useState('');
  const [countDigits, setCountDigits] = useState('');
  const [showDigits, setShowDigits] = useState('');

  const handleCountDigits = () => {
    const digitCount = (phrase.match(/[0123456789]/g) || []).length;
  //  const digitCount = (phrase.match(/[0135789]/g) || []).length;

    setCountDigits(digitCount);
  };

  const handleShowDigits = () => {
    const digits = (phrase.match(/[0123456789]/g) || []).join('');
  // const digits = (phrase.match(/[0135789]/g) || []).join('');
    setShowDigits(digits);
  };

  return (
    <div className="phrase-container">
      <div className="input-group">
        <label>
          Phrase:
          <input
            type="text"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="Enter a phrase"
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Count Digits:
          <input type="text" value={countDigits} readOnly
          placeholder='Count Digits' />
         
        </label>
      </div>
      <div className="input-group">
        <label>
          Show Digits:
          <input type="text" value={showDigits} readOnly
          placeholder='Show Digits' />
        </label>
      </div>
      <div className="button-group">
        <button onClick={handleCountDigits}>Count Digits</button>
        <button onClick={handleShowDigits}>Show Digits</button>
      </div>
    </div>
  );
};

export default Phrase;

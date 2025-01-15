import React, { useState } from 'react';
import pirateDictionary from './pirateDictionary';
import './convertor.css';

const PirateSpeakConverter = () => {
  const [englishText, setEnglishText] = useState('');
  const [pirateText, setPirateText] = useState('');

  const convertToPirateSpeak = (text) => {
    return text.split(' ').map(word => {
      const lowerCaseWord = word.toLowerCase();
      return pirateDictionary[lowerCaseWord] ? pirateDictionary[lowerCaseWord] : word;
    }).join(' ');
  };

  const handleConvert = (event) => {
    const text = event.target.value;
    setEnglishText(text);
    setPirateText(convertToPirateSpeak(text));
  };

  return (
    <div>
      <div className="heading">
        <h1>PIRATE SPEAK</h1>
      </div>
      <div className="container">
        <div>
          <textarea
            value={englishText}
            onChange={handleConvert}
            rows="10"
            cols="30"
            placeholder="Type your text here"
            className="textarea-box"
          />
        </div>
        
        <div>
          <textarea
            value={pirateText}
            readOnly
            rows="10"
            cols="30"
            placeholder="Pirate version will appear here"
            className="textarea-box"
          />
        </div>
      </div>
    </div>
  );
};

export default PirateSpeakConverter;

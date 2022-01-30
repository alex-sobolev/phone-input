// https://codepen.io/oliver-stripe/full/LjQQvX

import { useState } from 'react';
import { TextField, Box } from '@mui/material';
import './App.css';

const isValid = str => {
  if (str === '') return true;

  const numVal = parseInt(str[str.length - 1]);

  return !Number.isNaN(numVal);
};

const formatStr = str => {
  const len = str.length;
  let result = '';

  if (len > 0) {
    const numStr = str
      .split('')
      .filter(char => !Number.isNaN(parseInt(char)))
      .join('');

    let areaCode = '';
    let phoneNumber = '';

    if (numStr.length === 0) {
      return '';
    }

    if (numStr.length < 4) {
      areaCode = `(${numStr}`;
    } else {
      areaCode = `(${numStr.slice(0, 3)}) `;

      if (numStr.length < 7) {
        phoneNumber = numStr.slice(3);
      } else {
        phoneNumber = `${numStr.slice(3, 6)}-${numStr.slice(6)}`;
      }
    }

    result = `${areaCode}${phoneNumber}`;
  } else {
    return str;
  }

  return result;
};

export const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const onInputTyping = event => {
    const val = event.target.value;
    const isRemoving = val.length < phoneNumber.length;

    if ((!isRemoving && !isValid(val)) || val.length > 14) {
      return;
    }

    const formattedStr = formatStr(val);

    setPhoneNumber(formattedStr);
  };

  return (
    <div className="App">
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '2rem',
        }}
      >
        <TextField value={phoneNumber} onChange={onInputTyping} placeholder="(555) 555-5555" />
      </Box>
    </div>
  );
};

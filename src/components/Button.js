import React from 'react';

import ButtonLoader from './icons/ButtonLoader';
import './Button.css';

export default function Button({ 
  value,
  loading, 
  onClick, 
  size,
  ...rest
}) {
  size = size ? (' Btn-' + size) : '';

  return(
    <button
      className={'Btn' + size}
      disabled={loading}
      onClick={onClick}
      {...rest}
      >

      { loading ? <ButtonLoader /> : value }
    </button>
  );
}
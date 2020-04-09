import React from 'react';

export default function Input({
  /* dataString, */
  name, onChange, placeholder, value, ...rest
}) {
  const attributeBag = {
    [`data-${name}`]: ''
  }

  return (
    <div className="Input">
      <label htmlFor={name}>{name.split('-').join(' ')}</label>
      <input
        // defaultValue=''
        id={name}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
        {...attributeBag} />
    </div>
  );
}
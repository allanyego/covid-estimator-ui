import React from 'react';

export default function Input({
  /* dataString, */
  name,
  onChange,
  placeholder,
  value,
  ...rest
}) {
  const attributeBag = {
    [`data-${name}`]: ''
  }
  
  function onInput(event) {
    onChange(event.target.value);
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
        onChange={onInput}
        {...rest}
        {...attributeBag} />
    </div>
  );
}
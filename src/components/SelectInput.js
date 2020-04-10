import React from 'react';

export default function SelectInput({ name, onChange, value }) {
  const attributeBag = {
    [`data-${name}`]: ''
  }

  function onSelect(event) {
    onChange(event.target.value);
  }

  return (
    <div className="Input">
      <label htmlFor={name}>{name.split('-').join(' ')}</label>
      <select
        id={name}
        name={name} /* defaultValue="months" */
        value={value}
        onChange={onSelect}
        {...attributeBag}
      >

        <option value="days">Days</option>
        <option value="weeks">Weeks</option>
        <option value="months">Months</option>
      </select>
    </div>
  );
}
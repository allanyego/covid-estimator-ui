import React from 'react';

export default function SelectInput({ name, onChange, value }) {
  const attributeBag = {
    [`data-${name}`]: ''
  }

  return (
    <div className="Input">
      <label htmlFor={name}>{name.split('-').join(' ')}</label>
      <select
        id={name}
        name={name} /* defaultValue="months" */
        value={value}
        onChange={onChange}
        {...attributeBag}
      >

        <option value="days">Days</option>
        <option value="weeks">Weeks</option>
        <option value="months">Months</option>
      </select>
    </div>
  );
}
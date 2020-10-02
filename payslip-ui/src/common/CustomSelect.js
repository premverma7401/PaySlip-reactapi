import React from 'react';

const CustomSelect = ({ optionValues, name, value }) => {
  return (
    <select name={name} value={value}>
      <option>{optionValues}</option>
    </select>
  );
};

export default CustomSelect;

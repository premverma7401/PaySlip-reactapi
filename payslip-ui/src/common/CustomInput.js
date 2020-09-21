import React from 'react';
import { useField } from 'formik';

const CustomInput = (props) => {
  const { name, placeholder, ...rest } = props;
  return <input name={name} placeholder={placeholder} {...rest} />;
};

export default CustomInput;

import React from 'react';
import { TextInput } from 'react-materialize';

const CustomInput = (props) => {
  const { name, placeholder, type, ...rest } = props;
  return (
    <TextInput name={name} placeholder={placeholder} type={type} {...rest} />
  );
};

export default CustomInput;

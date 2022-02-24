import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function InputText(props) {
  const { form, name, label, disabled } = props;
  const { errors, formState } = form
  const hasError = formState.touched[name] && errors[name]

  console.log(errors[name]);

  console.log(hasError);
  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      label={label}
      
      error={!!hasError}
      helperText={errors[name]?.message}
      disabled={disabled}
    />
  );
}

InputText.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,

  disabled: PropTypes.bool,
};

export default InputText;

import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputText from "../../../../components/Form-controls/InputField";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string()
      .required('Please enter title')
      .min(5, 'Title is to short'),
      
  })

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema)
  });
  const handleSubmit = (values) => { 
    const {onSubmit} = props;

    if(onSubmit) {
      onSubmit(values)
    }

    form.reset()
  }
  return (
  <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputText form={form} name="title" label="Todo"/>
  </form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default TodoForm;

import { useState } from 'react';

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const handleChange = ({ target }) => {
    setForm((values) => ({
      ...values,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    }));
  };

  const resetValues = () => {
    setForm(initialState);
  };

  return {
    values: form,
    handleChange,
    resetValues,
  };
};

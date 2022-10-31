import React from 'react';
import { nanoid } from 'nanoid';
import { Forma } from './Phonebook.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAddContactMutation, useFetchContactsQuery } from 'API/mockApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(13, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  const notify = text =>
    toast.success(`${text}`, {
      theme: 'dark',
    });

  const nameId = nanoid();
  const numberId = nanoid();
  const { data } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    if (data.find(i => i.name.toLowerCase() === values.name.toLowerCase())) {
      return notify(`${values.name} is already in contacts.`);
    }
    const id = nanoid();
    const obj = { ...values, id };
    addContact(obj)
      .unwrap()
      .then(({ name }) => notify(`${name} was added`))
      .catch(({ error }) => notify(`${error}`));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Forma>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" />
          <label htmlFor={numberId}>Number</label>
          <Field type="tel" name="number" id={numberId} />
          <ErrorMessage name="number" />
          <button type="submit">Add Contact</button>
        </Forma>
      </Formik>
      <ToastContainer />
    </>
  );
};

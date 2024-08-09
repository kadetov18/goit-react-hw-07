// src/components/ContactForm/ContactForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps"; // Переконайтеся, що імпортуєте з contactsOps
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Name must be less than 50 chars")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Number must be less than 50 chars")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={s.form}>
          <h3 className={s.titleForm}>Name</h3>
          <Field className={s.formInput} name="name" type="text" />
          <ErrorMessage className={s.error} name="name" component="div" />
          <h3 className={s.titleForm}>Number</h3>
          <Field className={s.formInput} name="number" type="text" />
          <ErrorMessage className={s.error} name="number" component="div" />
          <button className={s.formBtn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

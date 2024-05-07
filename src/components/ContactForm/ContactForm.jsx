import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import * as yup from "yup";

export default function ContactForm() {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Required")
      .min(3, "Too Short!")
      .max(50, "Too Long!"),
    number: yup.string().required("Required"),
  });

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(addContact(values));
          resetForm();

          // Додайте код для виклику методу onContact з отриманими значеннями, якщо потрібно
        }}
      >
        <Form className={css.form}>
          <div>
            <label htmlFor="username_text" className={css.label}>
              Name
              <Field
                type="text"
                name="name"
                className={css.input}
                id="username_text"
                placeholder="Ivan"
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </label>
          </div>
          <div>
            <label htmlFor="user_number" className={css.label}>
              Number
              <Field
                name="number"
                className={css.input}
                id="user_number"
                placeholder="380-12-34-56-789"
              />
              <ErrorMessage
                name="number"
                component="div"
                className={css.error}
              />
            </label>
          </div>
          <button className={css.btn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
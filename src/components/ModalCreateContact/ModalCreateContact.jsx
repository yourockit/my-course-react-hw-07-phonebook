import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from 'yup';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';
import { Container } from './ModalCreateContact.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required(),
});

const initialValues = {
  name: '',
  phone: '',
};

export const ModalCreateContact = () => {
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();
  const handleSubmit = (e, { resetForm }) => {
    const newContact = {
      name: e.name,
      phone: e.phone,
    };
    const existingContact = contacts.find(
      contact => contact.name === newContact.name
    );
    if (existingContact) {
      alert(`${newContact.name} is alredy exist`);
      return;
    }
    createContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Container>
        <label>
          Name
          <br />
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
          <br />
        </label>
        <label>
          Phone number
          <br />
          <Field
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="phone" />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </Container>
    </Formik>
  );
};

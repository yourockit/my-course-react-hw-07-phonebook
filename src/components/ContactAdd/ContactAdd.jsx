import { Formik } from 'formik';
import * as yup from 'yup';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';
import {
  Container,
  IconBtnAdd,
  Input,
  Label,
  Title,
  Buttons,
  IconBtnCancel,
} from './ContactAdd.styled';
import { Button } from 'components/Buttons/Buttons';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required(),
});

const initialValues = {
  name: '',
  phone: '',
};

export const ContactAdd = ({ onCloseButtonClick }) => {
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();
  const handleSubmit = e => {
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
    onCloseButtonClick();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Container>
        <Label>
          <Title>Name</Title>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Contact name"
          />
        </Label>
        <Label>
          <Title>Phone number</Title>
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Contact phone"
          />
        </Label>
        <Buttons>
          <Button type="submit">
            <IconBtnAdd />
          </Button>
          <Button type="button" onClick={onCloseButtonClick}>
            <IconBtnCancel />
          </Button>
        </Buttons>
      </Container>
    </Formik>
  );
};

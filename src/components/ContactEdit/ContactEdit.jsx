import { Formik } from 'formik';
import * as yup from 'yup';
import { useUpdateContactMutation } from 'redux/contactsApi';
import {
  Container,
  IconBtnAdd,
  Input,
  Label,
  Title,
  Buttons,
  IconBtnCancel,
} from './ContactEdit.styled';
import { Button } from 'components/Buttons/Buttons';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required(),
});

export const ContactEdit = ({ id, name, phone, toggleModal }) => {
  const [updateContact] = useUpdateContactMutation();
  const handleSubmit = e => {
    const contact = {
      name: e.name,
      phone: e.phone,
    };

    console.log(contact);
    updateContact({ id, contact });
    toggleModal();
  };
  const initialValues = {
    name: name,
    phone: phone,
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
          <Button type="button" onClick={toggleModal}>
            <IconBtnCancel />
          </Button>
        </Buttons>
      </Container>
    </Formik>
  );
};

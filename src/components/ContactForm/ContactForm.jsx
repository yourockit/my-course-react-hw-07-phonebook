import { Formik } from 'formik';
import * as yup from 'yup';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
  useUpdateContactMutation,
} from 'redux/contactsApi';
import {
  Container,
  IconBtnAdd,
  Input,
  Label,
  Title,
  Buttons,
  IconBtnCancel,
  ErrorMsg,
  ErrorWrap,
} from './ContactForm.styled';
import { Button } from 'components/Buttons/Buttons';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Telephone number is required'),
});

export const ContactForm = ({ id, name, phone, toggleModal }) => {
  const [createContact] = useCreateContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleSubmit = async e => {
    const contact = {
      name: e.name,
      phone: e.phone,
    };

    const isInContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === e.name.toLowerCase() &&
        contact.phone === e.phone
    );

    if (isInContacts) {
      alert(
        `Contact ${contact.name} with number ${contact.phone} is alredy exist`
      );
      return;
    }
    try {
      if (name && phone) {
        await updateContact({ id, contact }).unwrap().then(toggleModal());
      } else {
        await createContact(contact).unwrap().then(toggleModal());
      }
    } catch (error) {
      console.log('ERROR');
    }
  };

  return (
    <Formik
      initialValues={{
        name: name,
        phone: phone,
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Container>
        <Label>
          <Title>Name</Title>
          <Input type="text" name="name" required placeholder="Contact name" />
          <ErrorWrap>
            <ErrorMsg name="name" />
          </ErrorWrap>
        </Label>
        <Label>
          <Title>Phone number</Title>
          <Input type="tel" name="phone" required placeholder="Contact phone" />
          <ErrorWrap>
            <ErrorMsg name="phone" />
          </ErrorWrap>
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

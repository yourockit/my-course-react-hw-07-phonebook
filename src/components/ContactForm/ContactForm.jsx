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
import { toast } from 'react-toastify';

const schema = yup.object().shape({
  name: yup.string().max(32).required('Name is required'),
  phone: yup
    .number('Phone must be a number')
    .required('Telephone number is required'),
});

export const ContactForm = ({ id, name, phone, toggleModal }) => {
  const [createContact] = useCreateContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const onHandleSubmit = async e => {
    const contact = {
      name: e.name,
      phone: e.phone,
    };

    if (!contacts) {
      await createContact(contact).unwrap().then(toggleModal());
      return;
    }
    const isInContacts = contacts.some(
      contact => contact.name === e.name && contact.phone === e.phone
    );

    if (isInContacts) {
      toast.warning(
        `Contact: ${contact.name} with number: ${contact.phone} is alredy exist`
      );
      return;
    }
    try {
      if (name && phone) {
        await updateContact({ id, contact }).unwrap().then(toggleModal());
      } else {
        await createContact(contact).unwrap().then(toggleModal());
      }
      toast.success('OK');
    } catch (error) {
      toast.error(error.status);
    }
  };

  return (
    <Formik
      initialValues={{
        name: name,
        phone: phone,
      }}
      validationSchema={schema}
      onSubmit={onHandleSubmit}
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

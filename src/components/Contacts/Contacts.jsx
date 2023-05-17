import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { getFilter } from 'redux/filterSlice';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Button } from 'components/Buttons/Buttons';
import { Filter } from 'components/Filter/Filter';
import {
  IconBtnAdd,
  ContactsWrap,
  Container,
  Control,
  ControlWrap,
} from './Contacts.styled';

export const Contacts = () => {
  const { data: contacts, isLoading } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  return (
    <Container>
      <ControlWrap>
        <Control>
          <Filter />
          <Button>
            <IconBtnAdd />
          </Button>
        </Control>
      </ControlWrap>
      <ContactsWrap>
        {isLoading && <p>LOADING...</p>}
        {contacts && <ContactsList contacts={contacts} filter={filter} />}
      </ContactsWrap>
    </Container>
  );
};

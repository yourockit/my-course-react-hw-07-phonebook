import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { getFilter } from 'redux/filterSlice';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ButtonAdd } from 'components/Buttons/Buttons';
import { Filter } from 'components/Filter/Filter';
import {
  IconBtnAdd,
  ContactsWrap,
  Container,
  Title,
  SearchFixed,
  Search,
  SearchWrap,
} from './Contacts.styled';

export const Contacts = () => {
  const { data: contacts, isLoading } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  return (
    <Container>
      <SearchFixed>
        <SearchWrap>
          <Title>Contacts</Title>
          <Search>
            <Filter />
            <ButtonAdd>
              <IconBtnAdd />
            </ButtonAdd>
          </Search>
        </SearchWrap>
      </SearchFixed>
      <ContactsWrap>
        {isLoading && <p>LOADING...</p>}
        {contacts && <ContactsList contacts={contacts} filter={filter} />}
      </ContactsWrap>
    </Container>
  );
};

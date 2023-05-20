import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { getFilter } from 'redux/filterSlice';
import { ContactsList } from 'components/ContactsListItem/ContactsListItem';
import { Modal } from 'components/Modal/Modal';
import useModal from '../../services/hooks/useModal';
import { ContactAdd } from 'components/ContactAdd/ContactAdd';
import { Button } from 'components/Buttons/Buttons';
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
  const [isShowModal, toogleMOdal] = useModal();

  return (
    <Container>
      <SearchFixed>
        <SearchWrap>
          <Title>Contacts</Title>
          <Search>
            <Filter />
            <Button type="button" onClick={toogleMOdal}>
              <IconBtnAdd />
            </Button>
          </Search>
        </SearchWrap>
      </SearchFixed>
      <ContactsWrap>
        {isLoading && <p>LOADING...</p>}
        {contacts && <ContactsList contacts={contacts} filter={filter} />}
      </ContactsWrap>
      <Modal show={isShowModal} title="Add Contact" closeModal={toogleMOdal}>
        <ContactAdd onCloseButtonClick={toogleMOdal} />
      </Modal>
    </Container>
  );
};

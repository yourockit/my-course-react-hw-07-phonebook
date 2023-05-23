import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { getFilter } from 'redux/filterSlice';
// import { getSelectedContact } from 'redux/selectedContactByIdSlice';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
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
import { Loading } from 'components/Loading/Loading';

export const Contacts = () => {
  const { data: contacts, isLoading } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  // const selectedContactById = useSelector(getSelectedContact);
  const [isShowModal, toggleModal] = useModal();

  // if (!contacts) {
  //   return;
  // }
  // const contactsId = contacts.map(contact => contact.id);
  // const selectedId = contactsId.includes(selectedContactById);
  // if (!selectedId && selectedContactById !== null) {
  //   alert('DELETED');
  // }

  return (
    <Container>
      <SearchFixed>
        <SearchWrap>
          <Title>Contacts</Title>
          <Search>
            <Filter />
            <Button type="button" onClick={toggleModal}>
              <IconBtnAdd />
            </Button>
          </Search>
        </SearchWrap>
      </SearchFixed>
      <ContactsWrap>
        {isLoading && <Loading />}
        {contacts && <ContactsListItem contacts={contacts} filter={filter} />}
      </ContactsWrap>
      <Modal
        showModal={isShowModal}
        title="Add Contact"
        closeModal={toggleModal}
      >
        <ContactAdd toggleModal={toggleModal} />
      </Modal>
    </Container>
  );
};

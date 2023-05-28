import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { getFilter } from 'redux/filterSlice';
// import { getSelectedContact } from 'redux/selectedContactByIdSlice';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { Modal } from 'components/Modal/Modal';
import useModal from '../../services/hooks/useModal';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Button } from 'components/Buttons/Buttons';
import { Filter } from 'components/Filter/Filter';
import {
  TitleWrap,
  IconBtnAdd,
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
          <TitleWrap>
            <Title>Contacts</Title>
            <Button type="button" onClick={toggleModal}>
              <IconBtnAdd />
            </Button>
          </TitleWrap>
          <Search>
            <Filter />
          </Search>
        </SearchWrap>
      </SearchFixed>
      {isLoading && <Loading />}
      {contacts && <ContactsListItem contacts={contacts} filter={filter} />}
      <Modal
        showModal={isShowModal}
        title="Add Contact"
        closeModal={toggleModal}
      >
        <ContactForm toggleModal={toggleModal} name={''} phone={''} />
      </Modal>
    </Container>
  );
};

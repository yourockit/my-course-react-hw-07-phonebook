import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { getFilter } from 'redux/filterSlice';
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
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contacts = () => {
  const { data: contacts, isLoading } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const [isShowModal, toggleModal] = useModal();

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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </Container>
  );
};

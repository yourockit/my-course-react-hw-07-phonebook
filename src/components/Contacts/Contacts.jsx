import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { getFilter } from 'redux/filterSlice';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { Modal } from 'components/Modal/Modal';
import useModal from '../../services/hooks/useModal';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Button } from 'components/Buttons/Buttons';
import { Search } from 'components/Search/Search';
import {
  TitleWrap,
  IconBtnAdd,
  Container,
  HeaderWrap,
  Title,
  ContainerFixed,
  SearchWrap,
} from './Contacts.styled';
import { Loading } from 'components/Loading/Loading';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const Contacts = () => {
  const { data: contacts, isLoading, isError, error } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const [isShowModal, toggleModal] = useModal();

  //SCROLL-TO CREATED OR EDITED CONTACT===
  const [valueScrollTo, setValueScrollTo] = useState('');
  const onContaсtAction = value => {
    setValueScrollTo(value);
  };
  //======================================

  return (
    <Container>
      <ContainerFixed>
        <HeaderWrap>
          <TitleWrap>
            <Title>Contacts</Title>
            <Button type="button" onClick={toggleModal} isLoading={isLoading}>
              <IconBtnAdd />
            </Button>
          </TitleWrap>
          <SearchWrap>
            <Search />
          </SearchWrap>
        </HeaderWrap>
      </ContainerFixed>
      {isLoading && <Loading />}
      {isError && toast.error(error.status)}
      {contacts && (
        <ContactsListItem
          contacts={contacts}
          filter={filter}
          valueScrollTo={valueScrollTo}
        />
      )}
      <Modal
        showModal={isShowModal}
        title="Add Contact"
        closeModal={toggleModal}
      >
        <ContactForm toggleModal={toggleModal} contactId={onContaсtAction} />
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

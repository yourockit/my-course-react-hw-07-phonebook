import {
  Details,
  Buttons,
  Phone,
  IconBtnEdit,
  IconBtnDelete,
} from './ContactDetails.styled';
import { Button } from 'components/Buttons/Buttons';
import { Modal } from 'components/Modal/Modal';
import useModal from '../../services/hooks/useModal';
import { ContactDelete } from 'components/ContactDelete/ContactDelete';
import { AnimatePresence } from 'framer-motion';
import { show } from './ContactDetailsMotionStyle';
import { useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const ContactDetails = ({ selectedContact, id, phone, name }) => {
  const [isShowModal, toggleModal] = useModal();
  const [modalOpen, setModalOpen] = useState('');

  const onHandleClick = modal => {
    if (modal === modalOpen) {
      setModalOpen('');
    }
    setModalOpen(modal);
    toggleModal();
  };

  return (
    <AnimatePresence>
      {selectedContact === id && (
        <Details
          key="details"
          initial="hidden"
          animate={'show'}
          exit={'hidden'}
          variants={show.container}
        >
          <Phone variants={show.item}>Tel: {phone}</Phone>
          <Buttons variants={show.item}>
            <Button type="button" onClick={() => onHandleClick('edit')}>
              <IconBtnEdit />
            </Button>
            <Button type="button" onClick={() => onHandleClick('delete')}>
              <IconBtnDelete />
            </Button>
          </Buttons>
          {modalOpen === 'delete' && (
            <Modal
              showModal={isShowModal}
              title="Delete "
              name={name}
              closeModal={toggleModal}
            >
              <ContactDelete id={id} toggleModal={toggleModal} />
            </Modal>
          )}
          {modalOpen === 'edit' && (
            <Modal
              showModal={isShowModal}
              title="Edit "
              name={name}
              closeModal={toggleModal}
            >
              <ContactForm
                id={id}
                name={name}
                phone={phone}
                toggleModal={toggleModal}
              />
            </Modal>
          )}
        </Details>
      )}
    </AnimatePresence>
  );
};

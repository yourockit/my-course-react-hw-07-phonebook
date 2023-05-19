import {
  Contact,
  Item,
  Buttons,
  IconBtnDelete,
  IconBtnEdit,
  Symbol,
  Name,
  Phone,
  More,
  SymbolWrap,
} from './ContactsList.styled';
// import { useDeleteContactMutation } from 'redux/contactsApi';
import { Button } from 'components/Buttons/Buttons';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const ContactsList = ({ contacts, filter }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [show, setShow] = useState(false);
  // const [deleteContact] = useDeleteContactMutation();

  const handleClick = id => {
    setSelectedContact(id === selectedContact ? null : id);
  };

  const handleToggleModal = () => {
    setShow(!show);
  };

  const closeModal = e => {
    if (e.currentTarget !== e.target && e.code !== 'Escape') {
      return;
    }
    setShow(!show);
  };

  const closeModalOnBtn = e => {
    console.log(e.code);
    if (e.currentTarget === e.target) {
      return;
    }
    setShow(!show);
  };

  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {contactsFilter
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, phone }) => {
          return (
            <Item key={id}>
              <Contact onClick={() => handleClick(id)}>
                <SymbolWrap>
                  <Symbol>{name[0]}</Symbol>
                </SymbolWrap>
                <Name>{name}</Name>
              </Contact>
              <CSSTransition
                in={selectedContact === id}
                timeout={300}
                classNames="buttons"
                unmountOnExit
              >
                <More>
                  <Phone>Tel: {phone}</Phone>
                  <Buttons>
                    <Button type="button">
                      <IconBtnEdit />
                    </Button>
                    <Button type="button" onClick={handleToggleModal}>
                      <IconBtnDelete />
                    </Button>
                  </Buttons>
                  {show && (
                    <Modal
                      id={id}
                      closeModal={closeModal}
                      closeModalOnBtn={closeModalOnBtn}
                    />
                  )}
                </More>
              </CSSTransition>
            </Item>
          );
        })}
    </>
  );
};

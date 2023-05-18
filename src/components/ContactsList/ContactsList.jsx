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
import { useDeleteContactMutation } from 'redux/contactsApi';
import { Button } from 'components/Buttons/Buttons';
import { useState } from 'react';
// import { Collapse } from 'react-collapse';
// import { UnmountClosed } from 'react-collapse';
import { CSSTransition } from 'react-transition-group';

export const ContactsList = ({ contacts, filter }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [show, setShow] = useState(false);
  const [deleteContact] = useDeleteContactMutation();

  const handleClick = id => {
    setSelectedContact(id === selectedContact ? null : id);
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
              {/* <Collapse isOpened={selectedContact === id}> */}
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
                    <Button type="button" onClick={() => deleteContact(id)}>
                      <IconBtnDelete />
                    </Button>
                  </Buttons>
                </More>
              </CSSTransition>
              {/* </Collapse> */}
            </Item>
          );
        })}
    </>
  );
};

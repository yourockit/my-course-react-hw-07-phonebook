import {
  Contact,
  Item,
  Symbol,
  Name,
  SymbolWrap,
} from './ContactsListItem.styled';
import { ContactDetails } from '../ContactDetails/ContactDetails';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const ContactsList = ({ contacts, filter }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleClick = id => {
    setSelectedContact(id === selectedContact ? null : id);
  };

  // const handleToggleModal = () => {
  //   setShow(!show);
  // };

  // const closeModal = e => {
  //   if (e.currentTarget !== e.target && e.code !== 'Escape') {
  //     return;
  //   }
  //   setShow(!show);
  // };

  // const closeModalOnBtn = e => {
  //   console.log(e.code);
  //   if (e.currentTarget === e.target) {
  //     return;
  //   }
  //   setShow(!show);
  // };

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
                <ContactDetails id={id} name={name} phone={phone} />
              </CSSTransition>
            </Item>
          );
        })}
    </>
  );
};

import {
  Contact,
  Item,
  Symbol,
  Name,
  SymbolWrap,
} from './ContactsListItem.styled';
import { ContactDetails } from '../ContactDetails/ContactDetails';
import { useState } from 'react';

export const ContactsListItem = ({ contacts, filter }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleClick = id => {
    setSelectedContact(id === selectedContact ? null : id);
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
              <ContactDetails
                selectedContact={selectedContact}
                id={id}
                name={name}
                phone={phone}
              />
            </Item>
          );
        })}
    </>
  );
};

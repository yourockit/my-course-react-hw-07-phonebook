import {
  ContactListWrap,
  Container,
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
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
  const groupedContacts = {};
  filteredContacts.map(contact => {
    const firstLeter = contact.name[0].toUpperCase();
    if (!groupedContacts[firstLeter]) {
      groupedContacts[firstLeter] = [];
    }
    return groupedContacts[firstLeter].push(contact);
  });
  const handleClick = id => {
    setSelectedContact(id === selectedContact ? null : id);
  };

  return (
    <ContactListWrap>
      {Object.entries(groupedContacts).map(([symbol, contacts]) => {
        return (
          <div key={symbol}>
            <p>{symbol}</p>
            <Container>
              {contacts.map(({ id, name, phone }) => {
                return (
                  <Item key={id}>
                    <Contact onClick={() => handleClick(id)}>
                      <SymbolWrap>
                        <Symbol>{name[0].toUpperCase()}</Symbol>
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
            </Container>
          </div>
        );
      })}
    </ContactListWrap>
  );
};

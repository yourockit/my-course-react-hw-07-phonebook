import {
  ContactListWrap,
  GroupContainer,
  ContactsContainer,
  Contact,
  Item,
  Name,
  Div,
  GroupSymbol,
  ContactSymbol,
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
          <GroupContainer key={symbol}>
            <GroupSymbol>{symbol}</GroupSymbol>
            <ContactsContainer>
              {contacts.map(({ id, name, phone }) => {
                return (
                  <Item key={id}>
                    <Contact onClick={() => handleClick(id)}>
                      <ContactSymbol>{name[0].toUpperCase()}</ContactSymbol>
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
            </ContactsContainer>
          </GroupContainer>
        );
      })}
      <Div></Div>
    </ContactListWrap>
  );
};

import {
  ContactListWrap,
  GroupContainer,
  ContactsContainer,
  Contact,
  Item,
  Symbol,
  Name,
  SymbolWrap,
} from './ContactsListItem.styled';
import { ContactDetails } from '../ContactDetails/ContactDetails';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { show } from './ContactsListItemMotion.styled';

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
    <AnimatePresence>
      <ContactListWrap>
        {Object.entries(groupedContacts).map(([symbol, contacts]) => {
          return (
            <GroupContainer key={symbol}>
              <p>{symbol}</p>
              <ContactsContainer>
                {contacts.map(({ id, name, phone }) => {
                  return (
                    <Item key={id}>
                      <Contact
                        onClick={() => handleClick(id)}
                        key="details"
                        initial="hidden"
                        animate={selectedContact === id ? 'show' : 'hidden'}
                        exit={'hidden'}
                        variants={show.container}
                      >
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
              </ContactsContainer>
            </GroupContainer>
          );
        })}
      </ContactListWrap>
    </AnimatePresence>
  );
};

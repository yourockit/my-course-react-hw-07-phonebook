import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <Section title="Phonebook" />
      <ContactForm />
      <Section title="Contacts" />
      <Filter />
      <Contacts />
    </>
  );
};

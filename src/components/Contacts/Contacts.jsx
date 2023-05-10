import { useSelector } from 'react-redux';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';
import { getFilter } from 'redux/filterSlice';
import { ContactsList } from 'components/ContactsList/ContactsList';

export const Contacts = () => {
  const { data: contacts, isLoading } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(getFilter);

  return (
    <ul>
      {isLoading && <p>LOADING...</p>}
      {contacts && (
        <ContactsList
          contacts={contacts}
          filter={filter}
          onDelete={deleteContact}
        />
      )}
    </ul>
  );
};

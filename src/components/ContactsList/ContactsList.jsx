export const ContactsList = ({ contacts, filter, onDelete }) => {
  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {contactsFilter.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            {name}: {phone}
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};

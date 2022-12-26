import { Item, Button } from './ContactsItem.styled';

import { deleteContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(contact.id));
  return (
    <Item>
      {contact.name}: {contact.number}
      <Button onClick={handleDelete}>Delete</Button>
    </Item>
  );
};

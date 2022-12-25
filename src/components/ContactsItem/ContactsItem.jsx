import { Item, Button } from './ContactsItem.styled';

import { deleteContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(id));
  return (
    <Item>
      {name}: {number}
      <Button onClick={handleDelete}>Delete</Button>
    </Item>
  );
};

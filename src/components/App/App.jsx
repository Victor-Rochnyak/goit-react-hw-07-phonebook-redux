import ContactsList from 'components/ContactsList/ContactsList';
import FormBook from 'components/FormBook/FormBook';
import FilterContacts from '../FilterContacts/FilterContacts';

// імпорт стилів
import { AppContainer, H2 } from './App.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  // визиває список контактів
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AppContainer>
        <H2>Contacts</H2>
        <FormBook />
        <H2>Contacts list</H2>
        <FilterContacts />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactsList />
      </AppContainer>
      <div></div>
    </>
  );
}

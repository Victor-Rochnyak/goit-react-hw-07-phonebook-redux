import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactItems: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContacts.pending]: handlePending,
    [deleteContacts.pending]: handlePending,

    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contactItems = action.payload;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactItems.unshift(action.payload);
    },
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contactItems.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contactItems.splice(index, 1);
    },

    [fetchContacts.rejected]: handleRejected,
    [addContacts.rejected]: handleRejected,
    [deleteContacts.rejected]: handleRejected,
  },
});

export const contactsReduser = contactSlice.reducer;

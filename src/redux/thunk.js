import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://644e2dbe1b4567f4d5816705.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts', async () => {
  const { data } = await axios.get('/contacts/contacts');
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    const { data } = await axios.post('/contacts/contacts', { name, phone });
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`/contacts/contacts/${id}`);
    return data;
  }
);
import types from './contact-types';
import { v4 as uuidv4 } from 'uuid';

export const addContacts = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContacts = contactsId => ({
  type: types.DELETE,
  payload: contactsId,
});

export const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

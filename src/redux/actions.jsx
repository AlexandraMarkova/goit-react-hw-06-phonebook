export const addNote = text => ({
  type: 'ADD_NOTE',
  payload: {
    id: Date.now(),
    text,
  },
});

// export const addContact = () => {
//   return {
//     type: 'ADD_CONTACT',
//   };
// };

// export const deleteContact = () => {
//   return {
//     type: 'DELETE_CONTACT',
//   };
// };

// export const changeFilter = () => {
//   return {
//     type: 'CHANGE_FILTER',
//   };
// };

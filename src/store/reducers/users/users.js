/* eslint-disable no-case-declarations */
const innitialState = [];

export const users = (state = innitialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return action.payload;
    case 'DELETE_USERS':
      return state.filter((item) => item.id !== action.payload.id);
    case 'EDIT_USER':
      const findIndex = state.findIndex((item) => item.id === action.payload.id);
      state[findIndex].name = action.payload.newName;
      return [...state];
    default:
      return state;
  }
};

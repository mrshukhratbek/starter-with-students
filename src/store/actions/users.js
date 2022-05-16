export const getUsers = (user) => {
  return {
    type: 'GET_USERS',
    payload: user,
  };
};

export const deleteUsers = (user) => {
  return {
    type: 'DELETE_USERS',
    payload: user,
  };
};

export const editUser = (user) => {
  return {
    type: 'EDIT_USER',
    payload: user,
  };
};

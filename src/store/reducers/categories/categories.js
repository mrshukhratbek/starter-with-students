const innitialState = [];

export const categories = (state = innitialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return state;
    default:
      return state;
  }
};

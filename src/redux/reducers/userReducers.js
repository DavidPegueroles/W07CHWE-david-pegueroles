import actionsTypes from "../actions/actionsTypes";

const userReducers = (user = {}, action = {}) => {
  let newUser;

  switch (action.type) {
    case actionsTypes.userRegister:
      newUser = { ...action.user };
      break;
    case actionsTypes.userLogin:
      newUser = { ...action.user };
      break;
    default:
      newUser = { ...user };
  }

  return newUser;
};

export default userReducers;

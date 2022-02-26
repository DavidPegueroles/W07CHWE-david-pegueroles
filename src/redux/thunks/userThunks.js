import { userRegisterAction } from "../actions/actionsCreators";

export const userRegisterThunk = (user) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_RRSS}users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const newUser = await response.json();
  dispatch(userRegisterAction(newUser));
};

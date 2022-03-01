import jwtDecode from "jwt-decode";
import {
  userLoginAction,
  userRegisterAction,
} from "../actions/actionsCreators";

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

export const userLoginThunk = (user) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_RRSS}users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const { token } = await response.json();
  const { id, username } = await jwtDecode(token);

  localStorage.setItem("userToken", token);

  dispatch(userLoginAction({ id, username, token }));
};

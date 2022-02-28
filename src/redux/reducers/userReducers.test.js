import actionsTypes from "../actions/actionsTypes";
import userReducers from "./userReducers";

describe("Given a userReducers function", () => {
  describe("When it receives currentUser and userRegister action with a valid user", () => {
    test("Then it should return the user", () => {
      const currentUser = {};

      const user = {
        name: "admin",
        username: "admin",
        password: "Admin123",
      };

      const action = {
        type: actionsTypes.userRegister,
        user,
      };

      const reducerResult = userReducers(currentUser, action);

      expect(reducerResult).toEqual(user);
    });
  });

  describe("When it receives currentUser and userLogin action with a valid user", () => {
    test("Then it should return the user", () => {
      const currentUser = {};

      const user = {
        username: "admin",
        password: "Admin123",
      };

      const action = {
        type: actionsTypes.userLogin,
        user,
      };

      const reducerResult = userReducers(currentUser, action);

      expect(reducerResult).toEqual(user);
    });
  });

  describe("When it receives currentUser and a non existing action with a valid user", () => {
    test("Then it should return currentUser", () => {
      const currentUser = {};

      const user = {
        name: "admin",
        username: "admin",
        password: "Admin123",
      };

      const action = {
        type: actionsTypes.unexisting,
        user,
      };

      const reducerResult = userReducers(currentUser, action);

      expect(reducerResult).toEqual(currentUser);
    });
  });

  describe("When it doesn't receive any user nor action", () => {
    test("Then it should return an empty object", () => {
      const expectedResult = {};

      const reducerResult = userReducers();

      expect(reducerResult).toEqual(expectedResult);
    });
  });
});

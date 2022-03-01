import { userLoginAction, userRegisterAction } from "./actionsCreators";
import actionsTypes from "./actionsTypes";

describe("Given a userRegisterAction function", () => {
  describe("When it receives a user", () => {
    test("Then it should return action with the user", () => {
      const user = {
        name: "admin",
        username: "admin",
        password: "Admin123",
      };

      const expectedAction = {
        type: actionsTypes.userRegister,
        user,
      };

      const action = userRegisterAction(user);

      expect(expectedAction).toEqual(action);
    });
  });
});

describe("Given a userLoginAction function", () => {
  describe("When it receives a user", () => {
    test("Then it should return the action with the user", () => {
      const user = {
        username: "admin",
        password: "Admin123",
      };

      const expectedAction = {
        type: actionsTypes.userLogin,
        user,
      };

      const action = userLoginAction(user);

      expect(expectedAction).toEqual(action);
    });
  });
});

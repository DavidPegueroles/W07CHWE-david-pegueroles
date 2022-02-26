import { userRegisterAction } from "./actionsCreators";
import actionsTypes from "./actionsTypes";

describe("Given a userRegisterAction function", () => {
  describe("When it receives id 1", () => {
    test("Then it should return action with id 1", () => {
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

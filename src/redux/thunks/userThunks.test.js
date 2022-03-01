import jwtDecode from "jwt-decode";
import { userLoginThunk, userRegisterThunk } from "./userThunks";

jest.mock("jwt-decode");

describe("Given a userRegisterThunk inner function", () => {
  describe("When it receives a user and it's called", () => {
    test("Then the dispatch should be invoked", async () => {
      const dispatch = jest.fn();
      const user = {
        name: "admin",
        username: "admin",
        password: "Admin123",
      };

      const registerThunk = userRegisterThunk(user);

      await registerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a useLoginThunk inner function", () => {
  describe("When it receives valid credentials and it's called", () => {
    test("Then the dispatch should be invoked", async () => {
      const dispatch = jest.fn();
      jwtDecode.mockReturnValueOnce({ id: 2, username: "admin" });
      const user = {
        username: "admin",
        password: "Admin123",
      };

      const loginThunk = userLoginThunk(user);

      await loginThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

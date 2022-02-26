import { userRegisterThunk } from "./userThunks";

describe("Given a userRegisterThunk inner function", () => {
  describe("When it is called with id 1", () => {
    test("Then it should call the dispatch", async () => {
      const dispatch = jest.fn();
      const user = {
        name: "admin",
        username: "admin",
        password: "Admin123",
      };

      const deleteThunk = userRegisterThunk(user);

      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

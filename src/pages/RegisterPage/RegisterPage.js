import { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegisterThunk } from "../../redux/thunks/userThunks";

const RegisterPage = () => {
  const blankForm = {
    name: "",
    username: "",
    password: "",
  };

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(blankForm);

  const resetForm = () => {
    setFormData(blankForm);
  };

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const isFormInvalid =
    formData.name === "" ||
    formData.username === "" ||
    formData.password === "";

  const submitForm = async (event) => {
    event.preventDefault();

    const newUser = {
      name: formData.name,
      username: formData.username,
      password: formData.password,
    };

    await dispatch(userRegisterThunk(newUser));

    resetForm();
  };

  return (
    <>
      <h2>Create account</h2>

      <form noValidate autoComplete="off" onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Super Mario"
          value={formData.name}
          onChange={changeData}
        />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="supermario"
          value={formData.username}
          onChange={changeData}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password..."
          value={formData.password}
          onChange={changeData}
        />

        <button type="submit" disabled={isFormInvalid}>
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterPage;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userLoginThunk } from "../../redux/thunks/userThunks";

const H2 = styled.h2`
  text-align: center;
  margin: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-left: 10vw;
  margin-bottom: 50px;

  label {
    font-size: 20px;
  }

  input {
    margin-top: 10px;
    margin-bottom: 30px;

    font-size: 16px;
    height: 25px;
    padding: 0 10px;

    color: #265778;
    border-radius: 5px;

    &:focus {
      outline: 1px solid #2598e6;
      border-radius: 5px;
    }
  }

  button {
    font-size: 16px;
    width: 100px;
    height: 35px;
    background-color: black;
    color: white;

    transition: 0.5s ease;

    &:disabled {
      background-color: transparent;
      color: transparent;
      border: none;
    }
  }
`;

const Login = () => {
  const blankForm = {
    username: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const isFormInvalid = formData.username === "" || formData.password === "";

  const submitForm = async (event) => {
    event.preventDefault();

    const userCredentials = {
      username: formData.username,
      password: formData.password,
    };

    await dispatch(userLoginThunk(userCredentials));

    resetForm();

    navigate("/");
  };

  return (
    <>
      <H2>Insert your username and password</H2>

      <Form noValidate autoComplete="off" onSubmit={submitForm}>
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
          Login
        </button>
      </Form>
    </>
  );
};

export default Login;

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #c8c8c8;
  border-bottom: none;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 80vw;

    padding: 0;
    margin: 0;

    .selected {
      font-weight: bold;
    }

    li {
      list-style: none;

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      width: 50%;
      height: 50px;

      a {
        text-decoration: none;
        color: black;
        font-size: 20px;

        &:visited {
          color: black;
        }
      }
    }

    div {
      width: 0px;
      height: 30px;
      border-left: 1px solid #c8c8c8;
    }
  }
`;

const PageContent = styled.div`
  border: 1px solid #c8c8c8;

  width: 80vw;
`;

const AuthenticationPage = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (page === 0) {
      navigate("/users/login");
    }
  }, [navigate, page]);

  const goToLogin = () => {
    setPage(0);
  };
  const goToRegister = () => {
    setPage(1);
  };

  return (
    <Section>
      <Nav>
        <ul>
          <li className={`${page === 0 ? "selected" : ""}`}>
            <Link
              to="/users/login"
              onClick={() => {
                goToLogin();
              }}
            >
              Login
            </Link>
          </li>
          <div></div>
          <li className={`${page === 1 ? "selected" : ""}`}>
            <Link
              to="/users/register"
              onClick={() => {
                goToRegister();
              }}
            >
              Register
            </Link>
          </li>
        </ul>
      </Nav>

      <PageContent>
        {page === 0 && <Login />}

        {page === 1 && <Register />}
      </PageContent>
    </Section>
  );
};

export default AuthenticationPage;

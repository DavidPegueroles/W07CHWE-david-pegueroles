import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 20px;
  right: 20px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0;
    padding: 0;

    li {
      list-style: none;
      margin: 20px;

      a {
        text-decoration: none;
        color: black;

        &:visited {
          color: black;
        }

        &:hover {
          color: #0091cf;
        }
      }
    }
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/users/login"}>Register/Login</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;

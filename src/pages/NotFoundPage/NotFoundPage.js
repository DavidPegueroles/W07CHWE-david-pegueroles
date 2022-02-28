import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  margin-left: 30px;

  h2 {
    font-size: 150px;
    margin: 0;
  }
  p {
    font-size: 30px;
  }
  a {
    color: #0088a3;
    text-decoration: none;

    &:visited {
      color: #0088a3;
      text-decoration: none;
    }
  }
`;

const NotFoundPage = () => {
  return (
    <Section>
      <h2>404</h2>
      <p>
        Sorry, this page does not exist. Return back <Link to="/">home</Link>.
      </p>
    </Section>
  );
};

export default NotFoundPage;

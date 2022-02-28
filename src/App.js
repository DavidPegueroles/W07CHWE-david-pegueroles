import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./components/Navigation/Navigation";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const H1 = styled.h1`
  margin: 30px;
`;

function App() {
  return (
    <>
      <H1>Fav Icons</H1>

      <Navigation />

      <Routes>
        <Route path="/" element={<NotFoundPage />} />
        <Route path="/users/register" element={<AuthenticationPage />} />
        <Route path="/users/login" element={<AuthenticationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

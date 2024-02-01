import styled from "styled-components";
import Body from "../components/Body";
import Header from "../components/Header";

const StyledLayout = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
`;

const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  margin-top: 1rem;
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <StyledMain>
        <Body />
      </StyledMain>
    </StyledLayout>
  );
};

export default Layout;

import styled from "styled-components";
import DarkModeToggle from "../ui/DarkModeToggle";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-700);
  background-color: var(--color-grey-0);
  border-bottom: 2px solid var(--color-grey-500);
`;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  width: fit-content;
  margin-left: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeaderText = styled.div`
  font-weight: 600;
  font-size: larger;
`;

const currentDate = new Date().toJSON().slice(0, 10);

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderText>The Archives</StyledHeaderText>
        <div>{currentDate} ● 3 Stories</div>
      </Container>
      <DarkModeToggle />
    </StyledHeader>
  );
};

export default Header;

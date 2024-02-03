import styled from "styled-components";
import DarkModeToggle from "../ui/DarkModeToggle";
import { formattedDate } from "../constants/getCurrentDate";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 65px;
  padding-right: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-700);
  background-color: var(--color-grey-0);
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

const StyledSubText = styled.div`
  font-size: 12px;
  margin-left: 8px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderText>The Archives</StyledHeaderText>
        <StyledSubText>{formattedDate} ● 3 Stories</StyledSubText>
      </Container>
      <DarkModeToggle />
    </StyledHeader>
  );
};

export default Header;

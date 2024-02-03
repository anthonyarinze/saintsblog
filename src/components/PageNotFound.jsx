import styled from "styled-components";
import useMoveBack from "../hooks/useMoveBack";

const StyledMain = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-50);
`;

const Box = styled.div`
  padding: 3rem;
  flex: 0 1 96rem;
  text-align: center;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 3.2rem;
`;

const StyledButton = styled.button`
  font-weight: 500;
  cursor: pointer;
  font-size: larger;
  text-align: center;
  border-radius: 8px;
  padding: 1.2rem 1.2rem;

  &:hover {
    background-color: var(--color-grey-600);
  }
`;

const PageNotFound = () => {
  const moveBack = useMoveBack();

  return (
    <StyledMain>
      <Box>
        <StyledHeading>
          The page you&apos;re looking for could not be found 😢
        </StyledHeading>
        <StyledButton onClick={moveBack}>&larr; Go back</StyledButton>
      </Box>
    </StyledMain>
  );
};

export default PageNotFound;

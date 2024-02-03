import styled from "styled-components";

const StyledDivider = styled.div`
  width: 95%;
  height: 1.5px;
  margin: 4px 0px;
  border-radius: 10px;
  background-color: var(--color-grey-500);
`;

const Divider = () => {
  return <StyledDivider />;
};

export default Divider;

import styled from "styled-components";

const StyledDiv = styled.div`
  width: 91%;
  padding: 8px;
  display: flex;
  height: 100px;
  cursor: pointer;
  border-radius: 9px;
  align-items: center;
  box-shadow: var(--shadow-md);
  justify-content: space-evenly;
  border: 2px solid transparent;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: var(--shadow-lg);
  }
`;

const StyledImg = styled.img`
  height: fit-content;
  width: fit-content;
`;

const ArticleItem = () => {
  return <StyledDiv></StyledDiv>;
};

export default ArticleItem;

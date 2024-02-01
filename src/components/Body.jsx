import styled from "styled-components";
import ArticleItem from "../ui/ArticleItem";

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
`;

const Body = () => {
  return (
    <StyledSection>
      <ArticleItem />
    </StyledSection>
  );
};

export default Body;

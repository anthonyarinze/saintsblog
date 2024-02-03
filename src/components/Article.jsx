import styled from "styled-components";
import ArticleItem from "../ui/ArticleItem";
import Header from "./Header";
import Divider from "./Divider";

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
`;

const Articles = () => {
  return (
    <StyledMain>
      <Header />
      <Divider />
      <ArticleItem />
    </StyledMain>
  );
};

export default Articles;

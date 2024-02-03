import styled from "styled-components";
import image from "../assets/medium.webp";
import { formattedDate } from "../constants/getCurrentDate";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  width: 95%;
  padding: 8px;
  height: 100px;
  display: flex;
  overflow: auto;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: start;
  box-shadow: var(--shadow-md);
  border: 2px solid transparent;
  transition: box-shadow 0.3s ease;
  border: 2px var(--color-grey-100) solid;

  &:hover {
    box-shadow: var(--shadow-lg);
  }
`;

const StyledImg = styled.img`
  height: 100px;
  width: 100px;
  margin-left: 5px;
  border-radius: 8px;
`;

const ArticleBody = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  margin-left: 15px;
  flex-direction: column;
`;

const ArticleType = styled.h6`
  margin-top: 0px;
  font-weight: 600;
  overflow: hidden;
  margin-bottom: 2px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: uppercase;
`;

const ArticleHeading = styled.h5`
  margin-top: 0px;
  overflow: hidden;
  margin-bottom: 0px;
  white-space: nowrap;
  font-size: 13.5px;
  text-overflow: ellipsis;
  text-transform: capitalize;
`;

const ArticleIntro = styled.p`
  max-height: 3em;
  margin-top: 2px;
  overflow: hidden;
  font-size: 13px;
  margin-bottom: 0px;
  text-overflow: ellipsis;
`;

const ArticleTimestamp = styled.span`
  font-size: 10px;
  margin-top: 5px;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const ArticleItem = () => {
  return (
    <StyledLink to="/articles/1" target="_blank">
      <StyledDiv>
        <StyledImg src={image} />
        <ArticleBody>
          <ArticleType>ethics</ArticleType>
          <ArticleHeading>
            On The Educational System (School Systems & The Metric of Progress)
          </ArticleHeading>
          <ArticleIntro>
            It’s no secret that school is one of the most impactful places an
            individual’s personality is developed. Therefore, it is of utmost
            importance that focus is duly given to such a foundational aspect of
            one’s life.
          </ArticleIntro>
          <ArticleTimestamp>{formattedDate} ● 4 min</ArticleTimestamp>
        </ArticleBody>
      </StyledDiv>
    </StyledLink>
  );
};

export default ArticleItem;

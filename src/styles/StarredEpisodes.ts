import styled from "styled-components";

export const StarredEpisodesContainer = styled.div`

  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 600px){
    > div {
      margin-right: 0;
    }
  }

`
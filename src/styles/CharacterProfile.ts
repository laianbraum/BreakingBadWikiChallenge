import styled from 'styled-components';

export const CharacterPageContainer = styled.div`

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

`
export const CharacterProfileContainer = styled.div`

  width: 90%;
  height: 400px;

  margin: 40px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px){
    width: 100%;
    height: auto;
    flex-direction: column;
  }

`
export const CharacterInfoWrapper = styled.div`

  width: 90%;
  height: 100%;

  margin-left: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 600px){
    margin-left: 0;
  }

`
export const CharacterInfo = styled.div`

  width: 100%;
  display: flex;

`
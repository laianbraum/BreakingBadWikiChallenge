import styled from 'styled-components';

export const CardsContainer = styled.div`

  width: 100%;
  max-width: 2000px;
  min-height: 90vh;

  margin: 0 auto;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  
  background-color: #fff;

  > a {
    width: 100%;
    max-width: 600px;
    margin: 20px;
    text-decoration: none;
  }

`
export const Card = styled.div`

  width: 100%;
  height: 300px;

  padding: 32px;

  border-radius: 8px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  background-color: #350264;

  text-align: left;

  transition: all 0.3s ease-in-out;

  &:hover{
    background-color: #350299;
    box-shadow: 6px 9px 20px rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 600px){
    height: 500px;
    flex-direction: column;
    padding: 16px;
  }


`
export const CardInfoWrapper = styled.div`
  width: 60%;
  min-width: 320px;
  height: 100%;
  margin: 0 auto;
  padding-left: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  @media only screen and (max-width: 600px){
    width: 100%;
    min-width: 0;
    padding-top: 40px;
  }

`
export const CardInfo = styled.div`
  width: 100%;
  display: flex;
`
export const CardTitle = styled.h1`

  font-size: 18pt;
  font-family: 'Montserrat', 'Roboto', sans-serif;
  font-weight: 'bold';
  color: #fff;
`
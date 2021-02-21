import styled from 'styled-components';

const Header = styled.div`

  width: 100%;
  height: 10vh;
  min-height: 70px;

  display: grid;
  place-items: center;

  background-color: #026635;

  color: #fff;
  
  font-family: 'Rowdies', 'Roboto', sans-serif;
  font-size: 2rem;
  letter-spacing: 0.05em;

  @media only screen and (max-width: 600px){
    font-size: 1.3rem;
  }

`

export default Header;
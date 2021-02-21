import styled from 'styled-components';

const Avatar = styled.div`

  width: 40%;
  height: 100%;

  > img{
    width: 100%;
    height: 100%;
    
    object-fit: cover;
    border-radius: 100%;

  }

  @media only screen and (max-width: 600px){

    width: 160px;
    height: 160px;

  }
`
export default Avatar;
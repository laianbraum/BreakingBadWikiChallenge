import styled from 'styled-components';
import TextProps from '../types/TextProps';

const StyledText = styled.span<TextProps>`

  width: 100%;
  text-overflow: clip;


  font-family: 'Montserrat', 'Roboto', sans-serif;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
`;

export default StyledText;
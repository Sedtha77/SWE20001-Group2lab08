import styled from 'styled-components';
import { tablet } from '../constant/device_width';

const TitleText = styled.p`
  
  font-size: 16px;
  font-weight: Bold;

  @media (min-width: ${tablet}) {
    font-size: 18px;
  }
`;

export { TitleText };

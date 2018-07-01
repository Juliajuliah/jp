import styled from 'styled-components';
import { media } from '../utils/style-utils';

const Content = styled.div`
  flex: 1 1 auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 0% 22vw 0% 22vw;
  ${media.tablet`padding: 15vw 2vw 2vh 2vw;`};
  ${media.phone`padding: 15vw 4vw 2vh 4vw;`};
`;

export default Content;

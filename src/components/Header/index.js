import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { media } from '../../utils/style-utils';
import { polyFluidSizing } from '../../utils/style-utils';
import { P, Ul, H1, H1a } from '../../components';

const Container = styled.nav`
  flex: 0 0 auto;
  background-color: white;
  overflow: hidden;
  margin: ${props => (props.hasSubnav ? '0' : '0 11vw')};
  ${media.tablet`
    margin: 0 2vw;
  `};
  ${media.tablet`
    display:none;
  `};
`;

const Li = styled.li`
  list-style-type: none;
  margin: 0;
`;

const activeClassName = 'nav-item-active';
const StyledLink = styled(Link).attrs({
  activeClassName,
})`
    ${polyFluidSizing('font-size', {
      576: 20,
      768: 15,
      992: 20,
    })};
  text-decoration: none;
  color: ${props => props.theme.secondary};

  &.${activeClassName} {
    font-weight: bold;
  }

  &::after {
    display: block;
    content: "${props => props.children}";
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;

const Header = ({ hasSubnav = false }) => (
  <Fragment>
    <Container hasSubnav={hasSubnav}>
      <Ul>
        <Li>
          <StyledLink activeClassName={activeClassName} to="/About">
            About
          </StyledLink>
        </Li>
        <Li>
          <StyledLink activeClassName={activeClassName} to="/kontakt">
            Kontakt
          </StyledLink>
        </Li>
      </Ul>
    </Container>
  </Fragment>
);

export default Header;

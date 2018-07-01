import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Menu from 'react-burger-menu/lib/menus/push';
import { media } from '../utils/style-utils';
import { H1, Ul } from '../components';
import { polyFluidSizing } from '../utils/style-utils';

const activeClassName = 'nav-item-active';

const StyledLink = styled(Link).attrs({
  activeClassName,
})`
  text-decoration: none;
     letter-spacing: 0.02em;
   ${polyFluidSizing('font-size', {
     576: 20,
     768: 30,
     992: 30,
   })};
  color: ${props => props.theme.primary};
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

const Wrapper = styled.div`
  display: none;
  ${media.tablet`
    display: initial;
  `};

  & .bm-burger-button {
    position: fixed;
    width: 32px;
    height: 27px;
    left: 15px;
    top: 15px;
  }

  & .bm-burger-bars {
    background: ${props => props.theme.primary};
  }

  & .bm-cross {
    background: ${props => props.theme.primary};
  }

  & .bm-menu {
    background: white;
  }

  & .bm-item-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
  }

  & .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

class MobileMenu extends Component {
  state = {
    isOpen: false,
  };
  handleStateChange = state => this.setState({ isOpen: state.isOpen });
  closeMenu = () => this.setState({ isOpen: false });

  render() {
    return (
      <Wrapper>
        <Menu
          isOpen={this.state.isOpen}
          onStateChange={state => this.handleStateChange(state)}
          width="80vw"
          pageWrapId="main"
        >
          <StyledLink
            onClick={this.closeMenu}
            activeClassName={activeClassName}
            to="/About"
          >
            Julia Reimann
          </StyledLink>
          <StyledLink
            onClick={this.closeMenu}
            activeClassName={activeClassName}
            to="/Kontakt"
          >
            {' '}
            Kontakt
          </StyledLink>
        </Menu>
      </Wrapper>
    );
  }
}

export default MobileMenu;

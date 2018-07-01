import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import Menu from '../components/Menu';
import theme from '../theme';
import 'typeface-roboto';
import './reset.css';

injectGlobal`
  html {
    font: 75%/1.4 'Roboto', serif;
  }

  body {
    color: rgb(55, 57, 148);
    font-family: 'Roboto', serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

 ::selection {
   color: white;
   background: ${theme.primary};
 }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  overflow: hidden;
`;

const Wipbin = styled.main`
  position: absolute;
  left: 55%;
  top: 25%;
  height: 30vh;
  width: 50vh;
  z-index: 100;
  overflow: scroll;
  background: grey;
`;

const TemplateWrapper = ({ children, data, location }) => (
  <div>
    <Helmet>
      <html lang="de" />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content="Portfolio Julia R." />
      <meta
        name="keywords"
        content="Portfolio, Julia, Reimann, Grafik, Foto, Artdirection"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Menu />
        <Container id="main">
          {!location.pathname.startsWith('/ueber-uns') && <Header />}
          {children()}
        </Container>
        <Wipbin>CONTENT</Wipbin>
      </Fragment>
    </ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query TemplateWrapperQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

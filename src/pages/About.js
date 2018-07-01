import React, { Fragment } from 'react';
import Content from '../components/Content';
import Image from '../components/Image';
import styled from 'styled-components';
import { P, H1, H2 } from '../components';
import { media } from '../utils/style-utils';



const About = ({ data }) => (
  <Fragment>
    <Content>
      <H1>Julia Reimann</H1>
      <P>Aboutaboutme</P>
      <H2>AboutReally</H2>
    </Content>
  </Fragment>
);



export default About;

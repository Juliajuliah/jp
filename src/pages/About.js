import React, { Fragment } from 'react';
import Content from '../components/Content';
import Image from '../components/Image';
import styled from 'styled-components';
import { P, H1, H2 } from '../components';

import { media } from '../utils/style-utils';
import Flickity from 'react-flickity-component';
import imagesloaded  from 'imagesloaded';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Slrrider =  ({ data }) => (
  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={125}
    totalSlides={3}
  >        
    <Slider>
      <Slide index={0}>I am the first Slide.</Slide>
      <Slide index={1}>I am the second Slide.</Slide>
      <Slide index={2}>I am the third Slide.</Slide>
    </Slider>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
  </CarouselProvider>
);
const About = ({ data }) => (
  <Fragment>
    <Content>
      <H1>Julia Reimann</H1>
      <P>Aboutaboutme</P>
      <H2>AboutReally</H2>
<Slrrider />
    </Content>
  </Fragment>
);

// class About extends React.Component {
//   render() {
//     const { data, showSlider } = this.props;
//     return (
//       <Fragment>
//       <Content>
//         <H1>Julia Reimann</H1>
//         <P>Aboutaboutme</P>
//         <H2>AboutReally</H2>
//         { showSlider ? <Slrrider /> : null }
//       </Content>
//     </Fragment>     
//     );
//   }
// };


export default About;

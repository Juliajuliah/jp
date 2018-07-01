import React, { Fragment } from 'react';
import styled from 'styled-components';
import Content from '../components/Content';
import Image from '../components/Image';
import { IndexH1 } from '../components';
import { media } from '../utils/style-utils';
import imagesloaded  from 'imagesloaded';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Slider1 =  ({ data }) => (
  <CarouselProvider
    naturalSlideWidth={10}
    naturalSlideHeight={10}
    totalSlides={3}
  >        
    <Slider>
      <Slide index={0}>  I am the first Slide.</Slide>
      <Slide index={1}> Second </Slide>
      <Slide index={2}>I am the third Slide.</Slide>
    </Slider>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
  </CarouselProvider>
);

const IndexPage = ({ data }) => (
  <Fragment>
    <Content>
      <IndexH1 />
      <Slider1 />
      <Image sizes={data.Bild1.childImageSharp.sizes} />
      <Image sizes={data.Bild2.childImageSharp.sizes} />
    </Content>
  </Fragment>
);


export default IndexPage;

export const query = graphql`
  query Slideshowcontent {
    Bild1: file(
      relativePath: { eq: "pages/assets/bild1.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    Bild2: file(relativePath: { eq: "pages/assets/bild2.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`;

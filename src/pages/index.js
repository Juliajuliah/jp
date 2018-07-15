import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Content from '../components/Content';
import Image from '../components/Image';
import { IndexH1, SlideStyle } from '../components';
import { media } from '../utils/style-utils';
import imagesloaded  from 'imagesloaded';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Slider1 = ({ data }) => (

  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={70}
    totalSlides={3}
  >        
 
  <Slider class="SlideStyle">
  <SlideStyle>
      <Slide index={0}>   <img
      src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/> I am the first Slide.</Slide>
      <Slide index={1}>   2 </Slide>
      <Slide index={2}>I am the third Slide.</Slide>
      </SlideStyle>
    </Slider>
    <ButtonBack> <SlideStyle>Back </SlideStyle></ButtonBack>
    <ButtonNext>Next</ButtonNext>
  </CarouselProvider>
);
    // SLIDE STYLE eig pink 
    // Wieso werden die properties von SlideStyle nicht von styled components übergeben??
    //Wie kann ich den component an Slide "anhängen" ohne slider umzubennen

    const Slider2 = ({ data }) => (

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={70}
        totalSlides={3}
      >        
     
      <Slider class="SlideStyle">
          <Slide index={0}>  I AM SLIDER 2   <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/> I am the first Slide.</Slide>
          <Slide index={1}>  2  </Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );


const IndexPage = ({ data }) => (
  <Fragment>
    <Content>
    <Image sizes={data.Bild2.childImageSharp.sizes} />
      <Slider1 />
      <Slider2 />
        </Content>
  </Fragment>
);



export default IndexPage;

export const query = graphql`
  query IndexPage {
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

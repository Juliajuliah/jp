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

class About extends React.Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1})
  }

  render() {
    const { counter } = this.state;
    return (
      <Fragment>
      <Content>
        Count: {counter}
        <button onClick={this.incrementCounter}>++</button>
      </Content>
    </Fragment>     
    );
  }
};


export default About;

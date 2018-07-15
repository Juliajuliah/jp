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




const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = (
    <img src={pics.kitty} />
  );
} else {
  img = ( 
    <img src={pics.doggy} />
  );
}

// // Get the H1 heading
// var h1 = document.querySelector('h1');

// // Get it's position in the viewport
// var bounding = h1.getBoundingClientRect();

// // Log the results
// console.log(bounding);


// // const bounding = h3.getBoundingClientRect,
// // getBoundingClientRect();

// const bounding = ({h3}) => {
//   const { width, height } = h3.getBoundingClientRect();
//   return { width, height };
//   }


const bounding = (h3) => {
  h3.getBoundingClientRect()
  }

console.log(bounding);

var isInViewport = () => {
if (
	bounding.top >= 0 &&
	bounding.left >= 0 &&
	bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
	bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
) {
	console.log('In the viewport!');
} else {
	console.log('Not in the viewport... whomp whomp');
}
}

// var isInViewport = () => {
//   var bounding = elem.getBoundingClientRect();
//   return (
//       bounding.top >= 0 &&
//       bounding.left >= 0 &&
//       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }


// if (isInViewport({h3} {
//   console.log('In the viewport!')
//   ; 


class About extends React.Component {
  state = {
    counter: 0,
  };
//state wird aktualisiert
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
        {img}
        <h3>
        Located with BoundingClient
      </h3>
      </Content>
    </Fragment>     
    );
  }
};

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

 
//Statemanagement ReactDocs

//Nur wenn außerhalb der Klasse dann const sonst einfach so wie state increment counter....
//geschwungene klammern ist javascript

export default About;

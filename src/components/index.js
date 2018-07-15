import React from 'react';
import styled from 'styled-components';
import { polyFluidSizing } from '../utils/style-utils';
import { media } from '../utils/style-utils';

export const A = styled(({ blank = true, ...props }) => (
  <a {...props} target={blank ? '_blank' : null}>
    {props.children}
  </a>
))`
  color: ${props => props.theme.primary};
`;

export const H1 = styled.h1`
  ${media.tablet`
      margin-top: 5%;
  `};
  ${polyFluidSizing('font-size', {
    576: 19,
    768: 30,
    992: 30,
  })};
  color: ${props => props.theme.primary};
  margin-top: 2.5%;
  margin-bottom: 2%;
  letter-spacing: 0.015em;
`;

export const P = styled.p`
  ${polyFluidSizing('font-size', {
    576: 15,
    768: 18,
    992: 14,
  })};
  ${media.tablet`
      margin-right: 30%;
  `};
  ${media.phone`
      margin-right: 5%;
  `};
  letter-spacing: 0.02em;
  margin-right: 15%;
  margin-bottom: 1.4rem;
  line-height: 1.7;
`;

export const H2 = styled.p`
  ${polyFluidSizing('font-size', {
    576: 15,
    768: 18,
    992: 14,
  })};
  font-weight: bold;
  margin-bottom: 1.4rem;
  letter-spacing: 0.015em;
`;

export const Ul = styled.ul`
  margin-left: 1.4rem;
  margin-bottom: 1.4rem;
  ${polyFluidSizing('font-size', {
    576: 15,
    768: 18,
    992: 14,
  })};
  display: flex;
  justify-content: space-between;
  margin: 0;
  height: 5vw;
  align-items: center;
  letter-spacing: 0.018em;
  ${media.tablet`
  margin-left: 7%;
  line-height:1.8 ;
  `};
`;

export const LISUB = styled.li`
  list-style-type: none;
  letter-spacing: 0.025em;
  padding-right: 1rem;
  padding-top: 2%;
  ${polyFluidSizing('font-size', {
    576: 15,
    768: 20,
    992: 14,
  })};
  ${media.tablet`
  padding-top: 2%;
  `};
`;

export const Button = styled.button`
  text-decoration: none;
  background-color: none;
  border-color: none;
  border-style: none;
  border-width: none;
  ${polyFluidSizing('font-size', {
    576: 15,
    768: 20,
    992: 14,
  })};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5%;
  justify-content: center;
  letter-spacing: 0.018em;
  color: ${props => props.theme.secondary};
  font-family: 'Roboto', serif;
  ${media.tablet`
color: ${props => props.theme.primary};
margin-top: 15%;
  flex-direction: column;
  justify-content:center;
  `};
`;

export const IndexH1 = styled.h1`
  text-align: center;
  color: rgb(55, 57, 148);
  ${polyFluidSizing('font-size', {
    576: 20,
    768: 38,
    992: 40,
  })};
  ${media.tablet`
  padding-top: 25%;
  padding-right:5%;
  padding-left:5%;
  `};
  ${media.phone`
     padding-top: 15%;
       padding-right:5%;
       padding-left:5%;
  `};
  padding-top: 4%;
  padding-bottom: 5%;
`;

export const CarouselProvider = styled.div`
position:absolut;  
width: 100%;
  height: 50%;
  border: solid blue;
`;

export const Slider = styled.div`
position:absolut;
  width: 100%;
  height: 50%;
  border: solid green;
`;

export const Slide = styled.div`
  width: auto;
  height: auto;
  padding: 0%;
  margin: 0%;
  border: solid yellow;
  `;

export const ButtonBack = styled.button`
position: relative;
border: solid coral;
  width: 10%;
  height: 10%;
  padding: 0%;
  margin: 0%;
`;
export const ButtonNext = styled.button`
position: relative;
border: solid coral;
  width: 10%;
  height: 10%;
  padding: 0%;
  margin: 0%;
`;

export const SlideStyle = styled.div`
border: solid pink;
color: blue;
background: green;
`;
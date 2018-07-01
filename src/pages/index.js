import React, { Fragment } from 'react';
import styled from 'styled-components';
import Content from '../components/Content';
import Image from '../components/Image';
import { IndexH1 } from '../components';

const IndexPage = ({ data }) => (
  <Fragment>
    <Content>
      <IndexH1 />
    </Content>
  </Fragment>
);

export default IndexPage;

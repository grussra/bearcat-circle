import React from 'react';
import styled from 'styled-components';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

export const Explore = (props) => (
   <GridWrapper>
     <p>This is a paragraph and I am writing on the home page</p>
     <p>This is another paragraph, hi hey hello whatsup yo</p>
   </GridWrapper>
)
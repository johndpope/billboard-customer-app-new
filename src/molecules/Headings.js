import React from "react";
import styled from "styled-components";


const HeadingContainer = styled.div`
color: #fff;
padding: 1.5rem;
padding-right: 50px;
// background-color: white;
`;

const Heading = styled.h1`
background-color: #3b4158;
display: inline-block;
`;

const Subheading = styled.h4`
background-color: #fcfcfc;
color: #3b4158;
display: inline-block;
`;

const Headings = () => (
  <HeadingContainer>
    <div>
      <Heading className="my-1 p-2">Advertising </Heading>
    </div>
    <div>
      <Heading className="p-2">made easy.</Heading>
    </div>
    <div>
      <Subheading className="my-2 p-2">Reach out to your customers now.</Subheading></div>
  </HeadingContainer>
)


export default Headings;
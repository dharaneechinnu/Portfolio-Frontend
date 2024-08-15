import React from 'react';
import styled from 'styled-components';
import aboutPhoto from '../img/about.jpg'; // Adjust the path as needed

const About = () => {
  return (
    <Container id='about'>
      <ContentSection>
        <TextSection>
          <Heading>About Me</Heading>
          <SubHeading><span>Driven</span>, Innovation Software <span>Engineer</span></SubHeading>
          <Paragraph>
            I am experienced in MERN stack development and Web3 technologies. My expertise includes
            Solidity for smart contracts, blockchain development, and interacting with Ethereum via Etherscan.
          </Paragraph>
        </TextSection>
        <PhotoSection>
          <Photo src={aboutPhoto} alt="About Me" />
        </PhotoSection>
      </ContentSection>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Center items vertically */
  min-height: 100vh; /* Full viewport height */
  padding: 20px;
  width: 100vw;
  height: auto;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 1rem; /* Added padding for better spacing on small screens */
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: row; /* Default: image left, text right */
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px; /* Adjust based on your design */
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 1rem; /* Added padding for better spacing on small screens */
  }
`;

const PhotoSection = styled.div`
  flex: 1;
  order: 1; /* Ensure photo comes after text on large screens */

  @media (max-width: 768px) {
    order: 2; /* On mobile, photo stays at the top */
    margin-top: 1rem; /* Space above photo on mobile */
  }
`;

const Photo = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border: 5px solid #888;
  border-radius: 5px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 200px;
  }
`;

const TextSection = styled.div`
  flex: 2;
  max-width: 600px;
  text-align: left; /* Align text to the left for the right-side position */
  
  @media (max-width: 768px) {
    text-align: center;
    order: 2; /* On mobile, text should be below photo */
    margin-bottom: 1rem; /* Space below text on mobile */
  }
`;

const Heading = styled.h2`
  color: red; /* Accent color */
  font-size: 3rem; /* Adjusted font size for better scaling */
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size:3rem;
  }
`;

const SubHeading = styled.h3`
  color: #fff; /* Default color for the text */
  font-size: 2rem;
  margin-bottom: 20px;
  
  span {
    color: red; /* Color for the highlighted words */
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  color: #fff; /* Default color for text */
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
  width: 90%; /* Ensures proper text alignment on smaller screens */
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    text-align: center; /* Center text on small screens */
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export default About;

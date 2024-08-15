import React from 'react';
import styled from 'styled-components';
import aboutPhoto from '../img/about.jpg'; // Adjust the path as needed

const About = () => {
  return (
    <Container id='about'>
      <PhotoSection>
        <Photo src={aboutPhoto} alt="About Me" />
      </PhotoSection>
      <TextSection>
        <Heading>About Me</Heading>
        <SubHeading> <span>Driven</span>,Innovation Software <span>Engineer</span></SubHeading>
        <Paragraph>
          I am experienced in MERN stack development and Web3 technologies. My expertise includes 
          Solidity for smart contracts, blockchain development, and interacting with Ethereum via Etherscan.
        </Paragraph>
      </TextSection>
    </Container >
  );
};


const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-right: 5rem;
  gap: 20px;
  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 5rem;
  }
`;

const PhotoSection = styled.div`
  flex: 1;
`;

const Photo = styled.img`
  width: 400px;
  height: 400px;
  border: 5px solid #888;
  margin-left: 20px;
  border-radius: 5px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const TextSection = styled.div`
  flex: 2;
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Heading = styled.h2`
  color: red; /* Accent color */
  font-size: 5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubHeading = styled.h3`
  color: #fff; /* Default color for the text */
  font-size: 2.5rem;
  margin-bottom: 20px;
  width: 400px;
   span {
    color: red; /* Color for the first word */
  }

  
`;


const Paragraph = styled.p`
  color: #fff; /* Dark grey color for text */
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 80%;
    margin-left: 30px;
    text-align: justify;
  }
`;

export default About;

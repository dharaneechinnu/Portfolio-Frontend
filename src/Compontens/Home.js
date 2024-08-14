import React from 'react';
import styled from 'styled-components';
import exampleImage from '../img/myphoto.jpg'; // Adjust the path as needed
import resume from '../img/Resume.pdf'

const Home = () => {
  return (
    <Container id='home'>
      <Content>
        <TextSection>
          <Greeting>Hello I am</Greeting>
          <Name>Dharaneedharan</Name>
          <Role>MERN Stack and Web3 Developer</Role>
          <Description>I have experience in MERN stack and Web3 development.</Description>
          <ActionSection>
            <ContactButton href="mailto:your-email@example.com">Contact Me</ContactButton>
            <ResumeButton href={resume} download="Dharaneedharan-Resume">Download Resume</ResumeButton>
          </ActionSection>
        </TextSection>
        <Image src={exampleImage} alt="Dharaneedharan" />
      </Content>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
 
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextSection = styled.div`
  flex: 1;
  text-align: left;
  margin: 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Greeting = styled.h4`
  color: #fff;
  font-size: 4rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Name = styled.h1`
  color: #FF014F;
  font-size: 5rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Role = styled.h2`
  color: #fff;
  font-size: 1.25rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  color: #999;
  font-size: 1rem;
  margin-top: 10px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ActionSection = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-right: 10px;
  color: #fff;
  border: 1px solid #FF014F;
  background-color: #FF014F;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.875rem;
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  border: 1px solid #FF014F;
  background-color: transparent;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.875rem;
  }
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  border: 5px solid #FF014F;
  border-radius: 50%;
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

export default Home;

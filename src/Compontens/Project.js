import React from 'react';
import styled from 'styled-components';
import pizza from '../img/pizza.png'; // Adjust the path as needed
import chat from '../img/chat.png'; // Adjust the path as needed
import hand from '../img/hand.png'; // Adjust the path as needed

const Project = () => {
  return (
    <Container id="project">
      <CenteredHeader>
        <Heading>Explore My</Heading>
        <Title>Project</Title>
      </CenteredHeader>

      {/* First section: Image on the right, Content on the left */}
      <ContentImageWrapper>
        <Content>
          <p>Web Application</p>
          <Description>
            <span>
              This Pizza App, built with the MERN Stack, features CRUD operations, seamless payment integration, robust email verification, password recovery functionality, and secure JWT token authentication. It offers a comprehensive solution for managing pizza orders and ensuring a smooth user experience from order placement to delivery.
            </span>
          </Description>
          <br />
          <br />
          <a href="https://oibsip-pizza-app.onrender.com/">Live site</a>
        </Content>
        <Image src={pizza} alt="Pizza Delivery" />
      </ContentImageWrapper>

      {/* Second section: Content on the right, Image on the left */}
      <ImageLeftContentRightWrapper>
        <ImageLeft src={chat} alt="Chat App" />
        <ContentRight>
          <p>Web Application</p>
          <Descriptionleft>
            <span className='left'>
              This Chat App, built with the MERN Stack, Real-time chat-App with socket.io for fast connection client to server direct so messages will be fast.
            </span>
          </Descriptionleft>
          <br />
          <a href="https://chat-app-frontends-yla0.onrender.com/">Live site</a>
        </ContentRight>
      </ImageLeftContentRightWrapper>

      {/* Third section: Image on the right, Content on the left */}
      <ContentImageWrapper>
        <Content>
          <p>Web3 Application</p>
          <Description>
            <span className='left'>
              This is Hand🤝Fund, a crowdfunding project leveraging blockchain technology. It uses MetaMask for transactions, along with Web3.js, Remix Solidity, and React for the frontend. Hand🤝Fund allows users to create campaigns and donate directly to campaign owners, ensuring transparent fund transactions.
            </span>
          </Description>
          <br />
          <br />
          <a href="https://hand-fund.onrender.com/#">Live site</a>
        </Content>
        <Image src={hand} alt="Hand Fund" />
      </ContentImageWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;

.left{
  text-align: justify;
}

`;

const CenteredHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin: 0;
`;

const Title = styled.h1`
  color: #FF014F;
  font-size: 3rem;
  margin: 0;
`;

const ContentImageWrapper = styled.div`
  display: flex;
  flex-direction: row; /* Default: Image on the right, Content on the left */
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on small screens */
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: 600px;
  margin-right: 20px; /* Space between content and image */

  p {
    font-size: 2rem;
    color: #FF014F;
  }

  a {
    color: #FF014F;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Description = styled.span`
  color: #fff;
  font-size: 1.5rem;
  text-align: justify;
  margin: 20px 0;
 
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 0 auto; /* Center image on small screens */
  }
`;

const ImageLeftContentRightWrapper = styled.div`
  display: flex;
  flex-direction: row; /* Image on the left, Content on the right */
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on small screens */
    text-align: justify;
  }
`;

const ImageLeft = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 20px; /* Space between image and content */

  @media (max-width: 768px) {
    margin: 0 auto 20px; /* Center image and add bottom margin on small screens */
  }
`;

const ContentRight = styled.div`
  max-width: 600px;

  p {
    font-size: 2rem;
    color: #FF014F;
  }

  a {
    color: #FF014F;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Descriptionleft = styled.span`
  color: #fff;
  font-size: 1.5rem;
  text-align: justify;
  margin: 20px 0;
 
`;

export default Project;

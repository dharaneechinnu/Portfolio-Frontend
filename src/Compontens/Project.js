import React from 'react';
import styled from 'styled-components';
import pizza from '../img/pizza.png'; // Adjust the path as needed
import chat from '../img/chat.png';
import hand from '../img/hand.png';

 const Project = () => {
  return (
    <StyledProject id="project">
      <div className="project">
        <div className="heading">
          <p>Explore My <span className="highlight">Project</span></p>
        </div>

        <div className="content">
          <div className="left-content">
            <p>Web Application</p>
            <div className="project-title">Pizza Delivery Application</div>
            <span>
              Pizza Delivery application is built using the MERN stack (React,
              Node, Express, MongoDB) with user authentication, JWT for verification, and features for forgot and reset passwords.
            </span>
            <div className="icon">
            <h6>React|Node|Express|MongoDb</h6>  
            <div className="svg">
            <a href="https://github.com/dharaneechinnu/OIBSIP-Frontend">
            <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.281 24.1342C4.11048 26.0226 4.11048 20.9868 1.64227 20.3573M18.9197 27.911V23.0389C18.966 22.4386 18.8865 21.8351 18.6865 21.2686C18.4865 20.702 18.1706 20.1854 17.7597 19.753C21.6348 19.3124 25.7073 17.8143 25.7073 10.9404C25.707 9.18274 25.0442 7.49244 23.8562 6.2194C24.4187 4.68161 24.379 2.98184 23.7451 1.47318C23.7451 1.47318 22.2888 1.03255 18.9197 3.33642C16.0912 2.55439 13.1096 2.55439 10.281 3.33642C6.9119 1.03255 5.45566 1.47318 5.45566 1.47318C4.82179 2.98184 4.78201 4.68161 5.34459 6.2194C4.14766 7.50189 3.4842 9.20746 3.49343 10.9782C3.49343 17.8017 7.56597 19.2998 11.4411 19.7908C11.035 20.2188 10.7219 20.7292 10.522 21.2889C10.3222 21.8485 10.24 22.4447 10.281 23.0389V27.911" stroke="#FF014F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
<a href="https://oibsip-pizza-app.onrender.com/">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF014F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
</a>
</div>

            </div>
            

          
           
          </div>
          <div className="right-content">
            <img src={pizza} alt="pizza" />
          </div>
        </div>

        <div className="content">
          
          <div className="right-content">
            <img src={chat} alt="pizza" />
          </div>
          <div className="left-content">
            <p>Web Application</p>
            <div className="project-title">Chat Apllication </div>
            <span>
              Real time chat application using MERN stack ( React , node, Express, mongodb) with socket.io for direct connection from client to server and user authentication and notification with sound 
            </span>
            <div className="icon">
            <h6>React|Node|Express|MongoDb</h6>  
            <div className="svg">
            <a href="https://github.com/dharaneechinnu/Chat-App-Frontend">
            <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.281 24.1342C4.11048 26.0226 4.11048 20.9868 1.64227 20.3573M18.9197 27.911V23.0389C18.966 22.4386 18.8865 21.8351 18.6865 21.2686C18.4865 20.702 18.1706 20.1854 17.7597 19.753C21.6348 19.3124 25.7073 17.8143 25.7073 10.9404C25.707 9.18274 25.0442 7.49244 23.8562 6.2194C24.4187 4.68161 24.379 2.98184 23.7451 1.47318C23.7451 1.47318 22.2888 1.03255 18.9197 3.33642C16.0912 2.55439 13.1096 2.55439 10.281 3.33642C6.9119 1.03255 5.45566 1.47318 5.45566 1.47318C4.82179 2.98184 4.78201 4.68161 5.34459 6.2194C4.14766 7.50189 3.4842 9.20746 3.49343 10.9782C3.49343 17.8017 7.56597 19.2998 11.4411 19.7908C11.035 20.2188 10.7219 20.7292 10.522 21.2889C10.3222 21.8485 10.24 22.4447 10.281 23.0389V27.911" stroke="#FF014F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
<a href="https://chat-app-frontends-yla0.onrender.com/">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF014F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
</a>
</div>

            </div>
           
          </div>
        </div>


        <div className="content">
          <div className="left-content">
            <p>Web3 Application</p>
            <div className="project-title">Hand Fund</div>
            <span>
              Hand Fund is crowdfunding Decentralizated application developed using Solidity and react and web3js for interactive with smart contract truffle and etherscan remix to deploy and test.
            </span>
            <div className="icon">
            <h6>React|Solidity|Web3js|remix|truffle</h6>  
            <div className="svg">
            <a href="https://github.com/dharaneechinnu/Hand-Fund">
            <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.281 24.1342C4.11048 26.0226 4.11048 20.9868 1.64227 20.3573M18.9197 27.911V23.0389C18.966 22.4386 18.8865 21.8351 18.6865 21.2686C18.4865 20.702 18.1706 20.1854 17.7597 19.753C21.6348 19.3124 25.7073 17.8143 25.7073 10.9404C25.707 9.18274 25.0442 7.49244 23.8562 6.2194C24.4187 4.68161 24.379 2.98184 23.7451 1.47318C23.7451 1.47318 22.2888 1.03255 18.9197 3.33642C16.0912 2.55439 13.1096 2.55439 10.281 3.33642C6.9119 1.03255 5.45566 1.47318 5.45566 1.47318C4.82179 2.98184 4.78201 4.68161 5.34459 6.2194C4.14766 7.50189 3.4842 9.20746 3.49343 10.9782C3.49343 17.8017 7.56597 19.2998 11.4411 19.7908C11.035 20.2188 10.7219 20.7292 10.522 21.2889C10.3222 21.8485 10.24 22.4447 10.281 23.0389V27.911" stroke="#FF014F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
<a href="https://hand-fund.onrender.com/">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF014F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
</a>
</div>

            </div>
            

          
           
          </div>
          <div className="right-content">
            <img src={hand} alt="pizza" />
          </div>
        </div>
      </div>
    </StyledProject>
  );
};


const StyledProject = styled.div`
 width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 1rem; /* Added padding for better spacing on small screens */
  }
  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .heading {
      display: flex;
      flex-direction: row;
      gap: 10px;

      p {
        font-size: 3rem;
        color: white;
        font-weight: 500;

        .highlight {
          color: red;
          font-weight: 700;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px;
      gap: 20px;
      padding-top: 4rem;
      padding-bottom: 4rem;

      .left-content {
        flex: 1;
        max-width: 500px;
        text-align: left;

        p {
          font-size: 1.5rem;
          font-weight: 600;
          color: #FF014F;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 10px 0;
          color: #fff;
        }

        span {
          font-size: 1rem;
          line-height: 1.5;
          color: #fff;
        }

        .icon {
          display: flex;
          gap: 2rem;

          a {
            display: flex;
            justify-content: flex-end;
          }

          .svg {
            display: flex;
            width: 100%;
            max-width: 500px;
            justify-content: flex-end;
            gap: 2rem;
          }
        }

        h6 {
          color: #fff;
          padding-top: 5px;
          margin: 0;
        }
      }

      .right-content {
        flex: 1;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        max-width: 500px;

        img {
          width: 100%;
          height: auto;
          max-width: 500px;
          border-radius: 10px;
        }
      }
    }

    @media (max-width: 768px) {
      .content {
        flex-direction: column;
        align-items: center;
      }

      .left-content,
      .right-content {
        max-width: 100%;
      }

      .right-content {
        order: -1; /* Move image to the top */
        margin-bottom: 20px; /* Add spacing between image and text */
      }
    }
  }
`;


export default Project;



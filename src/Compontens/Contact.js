import React, { useState } from 'react';
import styled from 'styled-components';
import Api from '../Api/Api.js';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const Contact = () => {
  const[name,setname] = useState('');
  const[email,setemail] = useState('');
  const[number,setnumber] = useState('');
  const[subject,setsubject] = useState('');
  const[message,setMessage] = useState('');
  const toastOption = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const mail = { name, email, message, subject, number };
      const response = await Api.post('auth/mail', mail);
      
      if (response.status === 200) {
        // Reset form fields
        setname('');
        setemail('');
        setMessage('');
        setnumber('');
        setsubject('');
        
        // Display success message
        toast.success(response.data.message, toastOption);
        console.log("success");
      } else if (response.status === 500) {
        // Display error message
        toast.error(response.data.message, toastOption);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, toastOption);
    }
  };
  
  return (
    <Container id='contact'>
      <TextSection>
        <h1>Get in Touch</h1>
        <p>Let’s Talk For your <span>Next Projects</span></p>
        <p>Discuss a Job or just want to say hi? Connect with me via email or through a phone call.</p>
        <div className="social-media">
          <div className="git">
            <a href="https://github.com/dharaneechinnu">
            <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.281 24.1342C4.11048 26.0226 4.11048 20.9868 1.64227 20.3573M18.9197 27.911V23.0389C18.966 22.4386 18.8865 21.8351 18.6865 21.2686C18.4865 20.702 18.1706 20.1854 17.7597 19.753C21.6348 19.3124 25.7073 17.8143 25.7073 10.9404C25.707 9.18274 25.0442 7.49244 23.8562 6.2194C24.4187 4.68161 24.379 2.98184 23.7451 1.47318C23.7451 1.47318 22.2888 1.03255 18.9197 3.33642C16.0912 2.55439 13.1096 2.55439 10.281 3.33642C6.9119 1.03255 5.45566 1.47318 5.45566 1.47318C4.82179 2.98184 4.78201 4.68161 5.34459 6.2194C4.14766 7.50189 3.4842 9.20746 3.49343 10.9782C3.49343 17.8017 7.56597 19.2998 11.4411 19.7908C11.035 20.2188 10.7219 20.7292 10.522 21.2889C10.3222 21.8485 10.24 22.4447 10.281 23.0389V27.911" stroke="#FF014F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
</div>
<div className="link">
  <a href="https://www.linkedin.com/in/dharaneedharan1825/">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6992 10.0654C21.6139 10.0654 23.4502 10.8261 24.8042 12.18C26.1581 13.5339 26.9187 15.3702 26.9187 17.2849V25.7077H22.1057V17.2849C22.1057 16.6467 21.8521 16.0346 21.4008 15.5833C20.9495 15.132 20.3374 14.8784 19.6992 14.8784C19.0609 14.8784 18.4488 15.132 17.9975 15.5833C17.5462 16.0346 17.2927 16.6467 17.2927 17.2849V25.7077H12.4797V17.2849C12.4797 15.3702 13.2403 13.5339 14.5942 12.18C15.9481 10.8261 17.7845 10.0654 19.6992 10.0654Z" stroke="#FF014F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.66665 11.2686H2.85364V25.7076H7.66665V11.2686Z" stroke="#FF014F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.26014 7.65871C6.58922 7.65871 7.66665 6.58128 7.66665 5.25221C7.66665 3.92313 6.58922 2.8457 5.26014 2.8457C3.93107 2.8457 2.85364 3.92313 2.85364 5.25221C2.85364 6.58128 3.93107 7.65871 5.26014 7.65871Z" stroke="#FF014F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>

</div>

<div className="mail">
<a href="mailto:dharaneedharanchinnusamy@gmail.com">
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.28456 5.04883H24.5366C25.8602 5.04883 26.9431 6.13175 26.9431 7.45533V21.8944C26.9431 23.2179 25.8602 24.3009 24.5366 24.3009H5.28456C3.96098 24.3009 2.87805 23.2179 2.87805 21.8944V7.45533C2.87805 6.13175 3.96098 5.04883 5.28456 5.04883Z" stroke="#FF014F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.9431 7.45508L14.9106 15.8778L2.87805 7.45508" stroke="#FF014F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
</div>
<div className="what">
<a href="https://wa.me/7397475123">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9997 1.90764e-06C18.5461 -0.00372922 24.0066 5.46629 24.0066 12C24.0066 18.5417 18.5468 23.9954 11.9994 23.9911C10.2882 23.9899 8.57476 23.6282 6.99616 22.9039L1.00967 23.9863C0.706097 24.0411 0.396443 23.9287 0.198866 23.6918C0.00129065 23.4549 -0.0537243 23.13 0.0548147 22.8413L1.77258 18.271C0.618629 16.3872 0.00348853 14.2068 0.00347836 12C0.00344832 5.46307 5.45737 0.00217174 11.9997 1.90764e-06ZM7.88029 7.00581C8.58877 6.18962 9.733 6.37569 10.4122 6.99571L11.89 8.34487C11.9765 8.42379 12.0269 8.53462 12.0295 8.65164C12.0322 8.76866 11.9869 8.88166 11.9041 8.96443C11.7168 9.1517 11.4755 9.5285 11.3473 9.95343C11.2183 10.3812 11.2291 10.7675 11.4077 11.0458C11.6382 11.4049 11.8789 11.734 12.2157 12.0239C12.5499 12.3116 12.9949 12.5744 13.6456 12.7724C13.8796 12.8436 14.1962 12.8426 14.5192 12.7611C14.842 12.6796 15.1224 12.53 15.296 12.3563C15.378 12.2743 15.4898 12.229 15.6057 12.2308C15.7217 12.2327 15.832 12.2814 15.9114 12.3659L17.2509 13.7919C17.9936 14.5825 18.0747 15.9083 17.1248 16.6358C16.0025 17.4953 14.1726 18.4173 12.382 17.268C10.209 15.873 8.28006 14.0348 6.87736 11.8501C6.40177 11.1093 6.3957 10.1948 6.61801 9.35091C6.84172 8.50167 7.31049 7.66224 7.88029 7.00581Z" fill="#FF014F"/>
</svg>
</a>

</div>


        

        </div>
      </TextSection>
      <FormSection>
      <Form onSubmit={handleSendMessage}>
        <FormGroup>
          <Label htmlFor="full-name">Full Name:</Label>
          <Input
            id="full-name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone Number:</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={number}
            onChange={(e) => setnumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Subject:</Label>
          <Input
            id="subject"
            type="text"
            placeholder="Enter the subject"
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="message-group">
          <Label htmlFor="message">Message:</Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormGroup>
        <SubmitButton type="submit">
          Send Message
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </SubmitButton>
      </Form>
    </FormSection>
      <ToastContainer />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-top: 10px;
  height: 100vh;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .social-media {
    display: flex;
    gap: 20px;
    padding: 10px;
    cursor: pointer;
  }
  .git, .link, .mail, .what {
    background-color: #1E1E1E;
    padding: 5px;
    border-radius: 5px;
  }
`;

const TextSection = styled.div`
  flex: 1;
  margin: 0;
  text-align: center;

  h1 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: red;
  }
  p {
    font-size: 1.25rem;
    color: white;
    width: 100%;
    text-align: center;
    span {
      color: red;
      font-weight: 800;
    }
  }

  @media (min-width: 768px) {
    text-align: left;
    margin-right: 1rem;
    margin-left: 2rem;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 2rem;
      width: 500px;
    }
  }
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 1rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  max-width: 600px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto) 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  &.message-group {
    grid-column: span 1;

    @media (min-width: 768px) {
      grid-column: span 2; // Makes the message textarea span both columns on larger screens
    }
  }
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  background-color: #1E1E1E;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  color: white;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: none;
  background-color: #1E1E1E;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  color: white;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: red;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;  // Space between text and SVG

  svg {
    width: 24px;   // Ensure the SVG has the same height and width
    height: 24px;  // Ensure the SVG has the same height and width
    fill: white;   // Ensure the SVG color matches text color
  }

  &:hover {
    background-color: #E60046; // Slightly lighter shade for hover
  }
`;

export default Contact;

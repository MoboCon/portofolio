import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Button } from 'react-bootstrap'; // Assuming you're using react-bootstrap for buttons

// Keyframes for gradient background animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
`;

// Keyframes for text glow effect
const glow = keyframes`
  0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
  50% { text-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.6); }
  100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
`;

// Keyframes for button ripple effect
const rippleEffect = keyframes`
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(4); opacity: 0; }
`;

// Container for the Contact section
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  color: #ffffff;
  background: linear-gradient(270deg, #000000, #002244);
  background-size: 600% 600%;
  animation: ${gradientAnimation} 20s ease infinite;
  min-height: 100vh;
`;

// Heading with glowing effect
const Heading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  background: linear-gradient(90deg, #ff0000, #ff9900);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);
  animation: ${glow} 1.5s ease-in-out infinite;
`;

// Contact form container
const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
`;

// Input and Textarea styles
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background: #333;
  color: #fff;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:focus {
    background: #444;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background: #333;
  color: #fff;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:focus {
    background: #444;
  }
`;

// Button with ripple effect
const RippleButton = styled(Button)`
  position: relative;
  overflow: hidden;
  background: #ff9900;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #e68a00;
  }

  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    width: 300%;
    height: 300%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    transition: transform 0.6s, opacity 0.6s;
  }

  &:active::after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

// Tooltip style
const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  & .tooltip-text {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
`;

// Tooltip text
const TooltipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
`;

const Contact = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <ContactContainer>
      <Heading data-aos="fade-down">Get in Touch</Heading>
      <FormContainer data-aos="fade-up">
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Textarea rows="5" placeholder="Your Message"></Textarea>
        <RippleButton>Send Message</RippleButton>
      </FormContainer>
      <Tooltip>
        <span>More Info</span>
        <TooltipText>Hover over me for more information!</TooltipText>
      </Tooltip>
    </ContactContainer>
  );
};

export default Contact;

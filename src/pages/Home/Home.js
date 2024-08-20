import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Particles from 'react-tsparticles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from '../../assets/images/profile.png'; // Asigură-te că imaginea are fundal transparent
import './Home.css'; // Asigură-te că stilurile sunt incluse

// Keyframes for gradient background animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
`;

// Keyframes for glowing text effect
const glow = keyframes`
  0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
  50% { text-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.6); }
  100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
`;

// Keyframes for subtle text shadow effect
const textShadowAnimation = keyframes`
  0% { text-shadow: 0 0 8px rgba(0, 0, 0, 0.8); }
  50% { text-shadow: 0 0 12px rgba(0, 0, 0, 0.6); }
  100% { text-shadow: 0 0 8px rgba(0, 0, 0, 0.8); }
`;

// Keyframes for text fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Keyframes for image hover effect
const smoothZoom = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Container for the entire Home section
const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  color: #ffffff;
  background: linear-gradient(270deg, #000000, #003366);
  background-size: 600% 600%;
  animation: ${gradientAnimation} 20s ease infinite;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

// Left side text content container
const TextContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
  z-index: 1; /* Ensures text is above particles */
`;

// Heading style with glowing effect
const Heading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ffffff, #f2f2f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);
  animation: ${glow} 1.5s ease-in-out infinite, ${fadeIn} 1s ease-out;
`;

// Subheading style with enhanced shadow and gradient
const Subheading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  background: linear-gradient(90deg, #f2f2f2, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 2px solid #ffffff;
  padding-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 1.5s ease-out, ${textShadowAnimation} 3s ease-in-out infinite;
`;

// Paragraph style for the bio/abilities with soft background
const Description = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  max-width: 600px;
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 10px;
  line-height: 1.6;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 2s ease-out;
`;

// List of skills with subtle hover effect
const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  &:before {
    content: '✓';
    color: #f2f2f2;
    margin-right: 0.5rem;
  }
  transition: color 0.3s ease;
  &:hover {
    color: #f2f2f2;
    cursor: pointer;
  }
`;

// Right side image container
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1; /* Ensures image is above particles */
`;

// Profile image with black-and-white effect
const ProfileImage = styled.img`
  width: 500px; /* Increased size for emphasis */
  height: auto;
  transition: transform 0.3s ease, filter 0.3s ease;
  border-radius: 50%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
  filter: grayscale(100%) contrast(100%) brightness(90%); /* Black-and-white effect */
  animation: ${smoothZoom} 1s ease-in-out infinite;

  &:hover {
    transform: scale(1.1);
    filter: grayscale(0%) contrast(110%) brightness(100%); /* Enhanced effect on hover */
  }
`;

// Particles configuration
const particlesOptions = {
  particles: {
    number: {
      value: 50,
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 3,
    },
    move: {
      speed: 1,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <HomeContainer>
      <Particles options={particlesOptions} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />
      <TextContainer data-aos="fade-up">
        <Heading>Hello, I'm Mocanu Bogdan</Heading>
        <Subheading>Creative Developer & Designer</Subheading>
        <Description>
          With a strong passion for crafting beautiful and functional web applications, I specialize in front-end
          development, user experience design, and interactive interfaces. My goal is to build experiences that
          make a positive impact.
        </Description>
        <SkillsList>
          <SkillItem>Responsive Web Design</SkillItem>
          <SkillItem>JavaScript & React.js</SkillItem>
          <SkillItem>CSS & Styled Components</SkillItem>
          <SkillItem>UX/UI Design</SkillItem>
          <SkillItem>Version Control with Git</SkillItem>
        </SkillsList>
      </TextContainer>
      <ImageContainer data-aos="fade-left">
        <ProfileImage src={profileImage} alt="Profile" />
      </ImageContainer>
    </HomeContainer>
  );
}

export default Home;

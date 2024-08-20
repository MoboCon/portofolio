import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #0d2538;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 1rem;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`;

const FooterText = styled.p`
  color: #fff;
  font-size: 1rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialIcon href="https://www.facebook.com" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </SocialIcon>
        <SocialIcon href="https://www.twitter.com" target="_blank" aria-label="Twitter">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://www.github.com" target="_blank" aria-label="GitHub">
          <FaGithub />
        </SocialIcon>
      </SocialMedia>
      <FooterText>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;

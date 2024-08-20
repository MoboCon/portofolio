import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaAward, FaCode, FaLinkedin, FaGithub } from 'react-icons/fa';

// Keyframes for animations
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const progressAnimation = keyframes`
  0% { width: 0; }
  100% { width: var(--progress); }
`;

const slideIn = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const neonGlow = keyframes`
  0% { text-shadow: 0 0 10px rgba(0, 255, 0, 0.5); }
  50% { text-shadow: 0 0 20px rgba(0, 255, 0, 1); }
  100% { text-shadow: 0 0 10px rgba(0, 255, 0, 0.5); }
`;

// Styled Components
const AboutContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #f4f4f4;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
`;

const IntroSection = styled.div`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #0d2538;
  text-align: center;
  margin-bottom: 2rem;
`;

const TypingText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #01bf71;
  animation: ${typing} 4s steps(30, end) infinite;
  font-size: 1.5rem;
  color: #0d2538;
`;

const Timeline = styled.div`
  position: relative;
  margin: 2rem 0;
`;

const TimelineItem = styled.div`
  padding: 1rem;
  position: relative;
  width: 50%;
  left: ${({ left }) => (left ? '0' : '50%')};
  text-align: ${({ left }) => (left ? 'right' : 'left')};
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  &::after {
    content: '';
    position: absolute;
    top: 15px;
    right: ${({ left }) => (left ? '-7px' : 'auto')};
    left: ${({ left }) => (left ? 'auto' : '-7px')};
    width: 14px;
    height: 14px;
    background: #fff;
    border: 2px solid #01bf71;
    border-radius: 50%;
  }
  &:hover {
    background: #e0f7fa;
    border-radius: 8px;
    transition: background 0.3s ease-in-out;
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  top: 15px;
  left: ${({ left }) => (left ? '-40px' : 'auto')};
  right: ${({ left }) => (left ? 'auto' : '-40px')};
  font-size: 2rem;
  color: #01bf71;
`;

const NeonTitle = styled.h3`
  font-size: 1.5rem;
  color: #0d2538;
  animation: ${neonGlow} 1.5s ease-in-out infinite;
`;

const ItemSubtitle = styled.h4`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const SkillsSection = styled.div`
  margin: 4rem 0;
`;

const SkillBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillBarWrapper = styled.div`
  position: relative;
  background: #ddd;
  border-radius: 8px;
  height: 30px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SkillBarProgress = styled.div`
  height: 100%;
  width: var(--progress);
  background: #01bf71;
  border-radius: 8px;
  position: relative;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  animation: ${progressAnimation} 1s ease-in-out forwards;
  &:hover {
    background: #028a40;
  }
`;

const SkillBarText = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 1rem;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const AchievementsSection = styled.div`
  margin: 4rem 0;
`;

const AchievementCarousel = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  padding: 1rem 0;
`;

const AchievementCard = styled.div`
  flex: 0 0 auto;
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  scroll-snap-align: start;
  width: 350px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const AchievementTitle = styled.h3`
  font-size: 1.5rem;
  color: #0d2538;
  margin-bottom: 0.5rem;
  animation: ${neonGlow} 1.5s ease-in-out infinite;
`;

const AchievementDetails = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ResumeButton = styled.a`
  display: inline-block;
  background: #01bf71;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.2rem;
  margin-top: 2rem;
  &:hover {
    background: #0d2538;
    transition: 0.3s ease-in-out;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  font-size: 2rem;
  color: #0d2538;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #01bf71;
  }
`;

function About() {
  return (
    <AboutContainer>
      <IntroSection>
        <SectionTitle>About Me</SectionTitle>
        <TypingText>
          I am a dedicated and passionate professional with a background in software development. My expertise lies in creating impactful solutions and continuously improving my skills. I have worked on a range of projects, from web applications to mobile solutions, always aiming to deliver high-quality results. My background in [Your Field] includes extensive experience with modern technologies and methodologies.
        </TypingText>
        <TypingText>
          I believe in the power of continuous learning and am committed to staying updated with the latest industry trends. My goal is to leverage my skills and experiences to contribute to innovative projects and help organizations achieve their objectives.
        </TypingText>
      </IntroSection>

      <Timeline>
        <TimelineItem left>
          <TimelineIcon><FaCode /></TimelineIcon>
          <NeonTitle>Position/Role</NeonTitle>
          <ItemSubtitle>Company Name - 2020 - Present</ItemSubtitle>
          <p>
            In my current role, I lead a team of developers in creating scalable web applications. My responsibilities include project management, code reviews, and ensuring timely delivery of features.
          </p>
        </TimelineItem>
        <TimelineItem>
          <TimelineIcon><FaAward /></TimelineIcon>
          <NeonTitle>Degree/Certification</NeonTitle>
          <ItemSubtitle>Institution Name - 2016 - 2020</ItemSubtitle>
          <p>
            Earned a degree in [Your Degree], with a focus on [Relevant Subjects]. Participated in various projects and gained hands-on experience in developing software solutions.
          </p>
        </TimelineItem>
        {/* Add more TimelineItems as needed */}
      </Timeline>

      <SkillsSection>
        <SectionTitle>My Skills</SectionTitle>
        <SkillBarContainer>
          <SkillBarWrapper>
            <SkillBarProgress style={{ '--progress': '25%' }}>
              <SkillBarText>JavaScript - 25%</SkillBarText>
            </SkillBarProgress>
          </SkillBarWrapper>
          <SkillBarWrapper>
            <SkillBarProgress style={{ '--progress': '50%' }}>
              <SkillBarText>React.js - 50%</SkillBarText>
            </SkillBarProgress>
          </SkillBarWrapper>
          <SkillBarWrapper>
            <SkillBarProgress style={{ '--progress': '75%' }}>
              <SkillBarText>Node.js - 75%</SkillBarText>
            </SkillBarProgress>
          </SkillBarWrapper>
          <SkillBarWrapper>
            <SkillBarProgress style={{ '--progress': '100%' }}>
              <SkillBarText>HTML5 - 100%</SkillBarText>
            </SkillBarProgress>
          </SkillBarWrapper>
          {/* Add more SkillBarWrappers as needed */}
        </SkillBarContainer>
      </SkillsSection>

      <AchievementsSection>
        <SectionTitle>Achievements</SectionTitle>
        <AchievementCarousel>
          <AchievementCard>
            <AchievementTitle>Achievement One</AchievementTitle>
            <AchievementDetails>
              Awarded Best Developer in 2023 for exceptional performance and innovation in web development.
            </AchievementDetails>
          </AchievementCard>
          <AchievementCard>
            <AchievementTitle>Achievement Two</AchievementTitle>
            <AchievementDetails>
              Successfully led a project that increased user engagement by 40% through innovative design and functionality.
            </AchievementDetails>
          </AchievementCard>
          {/* Add more AchievementCards as needed */}
        </AchievementCarousel>
      </AchievementsSection>

      <div style={{ textAlign: 'center' }}>
        <ResumeButton href="/assets/pdf/resume.pdf" download>
          Download Resume
        </ResumeButton>
      </div>

      <SocialLinks>
        <SocialIcon href="https://www.linkedin.com/in/yourprofile" target="_blank">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://github.com/yourprofile" target="_blank">
          <FaGithub />
        </SocialIcon>
        {/* Add more SocialIcons as needed */}
      </SocialLinks>
    </AboutContainer>
  );
}

export default About;

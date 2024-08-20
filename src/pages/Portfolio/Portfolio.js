import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #0d2538;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #0d2538;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
`;

const TechStack = styled.p`
  font-size: 0.9rem;
  color: #01bf71;
  margin-bottom: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled.a`
  background: #0d2538;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    background: #01bf71;
    transition: 0.3s ease-in-out;
  }
`;

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of Project One.',
      techStack: 'React, Node.js, MongoDB',
      image: require('../../assets/images/project1.jpg'),
      liveDemo: 'https://live-demo.com',
      github: 'https://github.com/username/project-one',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      techStack: 'HTML, CSS, JavaScript',
      image: require('../../assets/images/project2.jpg'),
      liveDemo: 'https://live-demo.com',
      github: 'https://github.com/username/project-two',
    },
    // Add more projects as needed
  ];

  return (
    <PortfolioContainer>
      <SectionTitle>My Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image.default} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <TechStack>{project.techStack}</TechStack>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ButtonsContainer>
                <LinkButton href={project.liveDemo} target="_blank">
                  Live Demo
                </LinkButton>
                <LinkButton href={project.github} target="_blank">
                  GitHub
                </LinkButton>
              </ButtonsContainer>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PortfolioContainer>
  );
}

export default Portfolio;

/* eslint-disable linebreak-style */
/* eslint-disable react/sort-comp */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Button = styled.button`
  background: transparent;
  color: #0000ff;
  border: none;
  border-radius: 5px;
  padding: 4px 8px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dialog = styled.div`   background-color: #ffffff;
padding: 20px;
border-radius: 10px;
font-family: Arial, sans-serif;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  margin-bottom: 15px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 15px;
  white-space: pre-wrap; /* Preserve line breaks */
}

button {
  background-color: #0000ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
      showDialog: false,
      dialogProject: null,
    };
    this.pageSplitTimes = 1.4;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: '01',
        projectName: 'BluePrint',
        projectDesc:
          'Collaborated with a team to develop a comprehensive design system for a client. Created an extensive Storybook showcasing all the design elements and components.',
        projectType: 'DESIGN SYSTEM',
        roles: ['UI Designer', 'Technonogist'],
        problem:
          'The client needed a consistent and efficient design system to streamline their product development process.',
        indicators:
          '1. Inconsistency in design across different products.\n2. Duplication of effort in designing similar components.\n3. Lack of a centralized repository for design assets.',
        solution:
          'Developed a comprehensive design system called BluePrint that provided a library of reusable components, typography guidelines, color palettes, and UI patterns. Created a Storybook documentation to showcase and maintain the design system.',
      },
      {
        number: '02',
        projectName: 'BluePrint Apps',
        projectDesc:
          'Built apps utilizing the design system we created for our client, resulting in consistent design and functionality across all apps.',
        projectType: 'ANGULAR APPS',
        roles: ['UI Designer', 'Front-end Developer'],
        problem:
          'The client needed a set of applications that adhere to the design system we developed (BluePrint) to ensure a consistent user experience.',
        indicators:
          '1. Inconsistency in the design language across different applications.\n2. Difficulty in maintaining consistent UI components and patterns.\n3. Lack of a seamless user experience across different apps.',
        solution:
          'Utilized the BluePrint design system to create a suite of Angular applications. Ensured consistent use of design elements, UI components, and interaction patterns across all apps. Conducted usability testing to validate the user experience.',
      },
      {
        number: '03',
        projectName: 'Admin Portal',
        projectDesc:
          'Developed an admin portal for a nail boutique with a database to capture stock and client information, as well as logic to generate reports, streamlining business operations and providing valuable insights into stock and client data.',
        projectType: 'WEB APP',
        roles: ['MEAN Stack Developer', 'UI Designer'],
        problem:
          'The nail boutique needed an efficient system to manage their inventory, client information, and generate reports for business insights.',
        indicators:
          '1. Manual inventory management causing errors and inefficiencies.\n2. Lack of a centralized system to store client information.\n3. Difficulty in generating accurate and timely reports.',
        solution:
          'Developed a web-based admin portal using the MEAN stack (MongoDB, Express.js, Angular, Node.js) that provided features for inventory management, client information storage, and report generation. Streamlined business operations and provided valuable insights for data-driven decision making.',
      },
      {
        number: '04',
        projectName: 'Nail Boutique Website',
        projectDesc:
          "Collaborated with a team to develop a website for a nail boutique with a customizer feature that allows customers to design their own nail art. The website also included information on the boutique's services, pricing, and booking options.",
        projectType: 'WEBSITE',
        roles: ['Web Developer'],
        problem:
          'The nail boutique needed an online presence to showcase their services and allow customers to customize and book nail art designs.',
        indicators:
          '1. Limited online visibility and reach.\n2. Lack of a platform for customers to customize and book nail art designs.\n3. Inability to showcase services, pricing, and contact information effectively.',
        solution:
          'Developed a responsive website using HTML, CSS, and JavaScript that provided information about the nail boutique, showcased services, pricing, and contact details. Implemented a customizer feature to allow customers to design their own nail art and integrated a booking system for convenient appointment scheduling.',
      },
      {
        number: '05',
        projectName: 'Readpoint',
        projectDesc:
          'Developed an e-commerce website for selling books with a MongoDB database and a payment system. The website allows customers to securely browse and purchase books.',
        projectType: 'WEB APP',
        roles: ['Full Stack Developer'],
        problem:
          'The client wanted to establish an online presence to sell books and provide a seamless user experience for browsing and purchasing books.',
        indicators:
          '1. Inability to reach a wider customer base without an online platform.\n2. Lack of a convenient and secure way for customers to browse and purchase books.\n3. Manual book inventory management leading to inaccuracies and inefficiencies.',
        solution:
          'Developed a web application using the MERN stack (MongoDB, Express.js, React, Node.js) that provided features for browsing and purchasing books. Integrated a secure payment system and implemented an efficient book inventory management system with real-time updates.',
      },
      {
        number: '06',
        projectName: 'Portfolio Website',
        projectDesc:
          'Created a personal portfolio website to showcase my projects, skills, and experience as a web developer and designer.',
        projectType: 'WEBSITE',
        roles: ['Web Developer', 'UI Designer'],
        problem:
          'I wanted to create an online presence to showcase my skills, projects, and experience as a web developer and designer.',
        indicators:
          '1. Limited online visibility and reach.\n2. Difficulty in showcasing my work and skills effectively.\n3. Inability to provide a professional and engaging platform for potential employers or clients.',
        solution:
          'Designed and developed a personal portfolio website using modern web technologies such as React, styled-components, and responsive design principles. Showcased my projects, skills, and experience in an organized and visually appealing manner. Implemented interactive components and ensured seamless navigation.',
      },
      {
        number: '',
        projectName: '',
        projectDesc:
          '',
        projectType: '',
        roles: [''],
        problem:
          '',
        indicators:
          '',
        solution:
          '',
      },

    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      vh: Math.round(window.document.documentElement.clientHeight * this.pageSplitTimes),
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;

    if (
      Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1
    ) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (
      slideNumber === this.workDetails.length - 1
      && Math.floor(scrollDistance / vh) < slideNumber
    ) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  handleButtonClick = (projectIndex) => {
    this.setState({
      showDialog: true,
      dialogProject: this.workDetails[projectIndex],
    });
  };

  handleCloseDialog = () => {
    this.setState({
      showDialog: false,
      dialogProject: null,
    });
  };

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;

    if (slideNumber >= this.workDetails.length) {
      return null; // No project details to render
    }

    const project = this.workDetails[slideNumber];
    const roles = project.roles.map((role, index) => <span key={index}>{role}</span>);

    let description = null;
    if (project.projectDesc) {
      description = (
        <div>
          <p>{project.projectDesc}</p>
          {project.projectType !== 'UI Designer' && (
            <Button type="button" onClick={() => this.handleButtonClick(slideNumber)}>
              More Info...
            </Button>
          )}
        </div>
      );
    }

    return (
      <TextContent
        number={project.number}
        projectName={project.projectName}
        projectDesc={description}
        projectType={project.projectType}
        roles={roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    const { showDialog, dialogProject } = this.state;

    const renderDialog = showDialog && dialogProject && (
      <Overlay>
        <Dialog>
          <h3>Problem:</h3>
          <p>{dialogProject.problem}</p>
          <h3>Indicators:</h3>
          <ul>
            {dialogProject.indicators.split('\n').map((indicator, index) => (
              <li key={index}>{indicator}</li>
            ))}
          </ul>
          <h3>Solution:</h3>
          <p>{dialogProject.solution}</p>
          <Button onClick={this.handleCloseDialog}>Close</Button>
        </Dialog>
      </Overlay>
    );
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
        {showDialog && (
          <Overlay>
            <Dialog>
              <h3>Problem:</h3>
              <p>{dialogProject.problem}</p>
              <h3>Indicators:</h3>
              <p>{dialogProject.indicators}</p>
              <h3>Solution:</h3>
              <p>{dialogProject.solution}</p>
              <Button onClick={this.handleCloseDialog}>Close</Button>
            </Dialog>
          </Overlay>
        )}
      </Container>
    );
  }
}

export default Work;

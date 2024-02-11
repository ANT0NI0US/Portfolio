import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projects/html-css-first-project.PNG";
import projImg2 from "../assets/img/projects/bootstrap-project-one.PNG";
import projImg3 from "../assets/img/projects/hangman-game.PNG";
import projImg4 from "../assets/img/projects/mind-game.PNG";
import projImg5 from "../assets/img/projects/dark-mode-project.PNG";
import projImg6 from "../assets/img/projects/dashboard.PNG";
import projImg7 from "../assets/img/projects/cartoon project.PNG";
import projImg8 from "../assets/img/projects/Quiz.PNG";
import projImg9 from "../assets/img/projects/bootstrap-project-2.PNG";
import projImg10 from "../assets/img/projects/slider control.PNG";
import projImg11 from "../assets/img/projects/todo List.PNG";
import projImg12 from "../assets/img/projects/LMS (Ain shams).PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const GraduationProjects = [
    {
      title: "LMS (React)",
      description: "Design & Development",
      imgUrl: projImg12,
      url: "https://drive.google.com/file/d/1XKfzSKEvQWMN1oy2mxsOZXppuKHrVFe2/view?usp=sharing",
    },
  ];

  const HtmlCssJava = [
    {
      title: "mind game",
      description: "Design & Development",
      imgUrl: projImg4,
      url: "https://mind-game-project.netlify.app/",
    },
    {
      title: "dark-mode-project",
      description: "Design & Development",
      imgUrl: projImg5,
      url: "https://slider-dark-mode.netlify.app/",
    },
    {
      title: "First Project",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://html-css-first-project.netlify.app/",
    },
    {
      title: "Cartoon project",
      description: "Design & Development",
      imgUrl: projImg7,
      url: "https://cartoon-projectt.netlify.app/",
    },
    {
      title: "Quiz",
      description: "Design & Development",
      imgUrl: projImg8,
      url: "https://timer-json-quiz.netlify.app/",
    },
    {
      title: "Slider Controller",
      description: "Design & Development",
      imgUrl: projImg10,
      url: "https://slider-control.netlify.app/",
    },
    {
      title: "todo List",
      description: "Design & Development",
      imgUrl: projImg11,
      url: "https://todo-projectt.netlify.app/",
    },
    {
      title: "dashboard",
      description: "Design & Development",
      imgUrl: projImg6,
      url: "https://dashboard-css-html.netlify.app/",
    },
    {
      title: "Hangman game",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "https://hangout-game.netlify.app/",
    },
  ];

  const htmlBooststrap = [
    {
      title: "Bondi project",
      description: "Design & Development",
      imgUrl: projImg2,
      url: "https://bootstrap-project-onee.netlify.app/",
    },
    {
      title: "EliteCrop project",
      description: "Design & Development",
      imgUrl: projImg9,
      url: "https://bootstrap-project-twoo.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="first-paragraph">Projects</h2>
                  <p>
                    Architecting Digital Wonders: Transforming Vision into
                    Interactive Front-End Realities, Where Coding Brilliance
                    Unleashes the Power of Alchemy, and Lines of Code Weave the
                    Tapestry of Technological Innovation.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Javascript
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Bootstrap</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {GraduationProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {HtmlCssJava.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {htmlBooststrap.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

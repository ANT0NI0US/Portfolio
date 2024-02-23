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
import ResticoProject from "../assets/img/projects/Restico.PNG";
import ChatbotProject from "../assets/img/projects/ChatBot.PNG";
import ClincProject from "../assets/img/projects/Clinc.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const [t] = useTranslation();

  const React = [
    {
      title: "ChatBot",
      description: t("projects.description"),
      imgUrl: ChatbotProject,
      url: "https://chatbotv2.mygatein.com/#/login",
    },
    {
      title: t("projects.GraduationProject.title"),
      description: t("projects.description"),
      imgUrl: projImg12,
      url: "https://drive.google.com/file/d/1XKfzSKEvQWMN1oy2mxsOZXppuKHrVFe2/view?usp=sharing",
    },
    {
      title: "Restico",
      description: t("projects.description"),
      imgUrl: ResticoProject,
      url: "https://restecho.portal.smartgate-egypt.com/",
    },
    {
      title: "Clinc Markter",
      description: t("projects.description"),
      imgUrl: ClincProject,
      url: "https://portal.clinicmarkter.niyat.sa/#/adminlogin",
    },
  ];

  const HtmlCssJava = [
    {
      title: t("projects.HtmlCssJava.darkModeProject.title"),
      description: t("projects.description"),
      imgUrl: projImg5,
      url: "https://slider-dark-mode.netlify.app/",
    },
    {
      title: t("projects.HtmlCssJava.firstProject.title"),
      description: t("projects.description"),
      imgUrl: projImg1,
      url: "https://html-css-first-project.netlify.app/",
    },
    {
      title: t("projects.HtmlCssJava.cartoonProject.title"),
      description: t("projects.description"),
      imgUrl: projImg7,
      url: "https://cartoon-projectt.netlify.app/",
    },
    {
      title: t("projects.HtmlCssJava.dashboard.title"),
      description: t("projects.description"),
      imgUrl: projImg6,
      url: "https://dashboard-css-html.netlify.app/",
    },

    {
      title: t("projects.htmlBooststrap.bondiProject.title"),
      description: t("projects.description"),
      imgUrl: projImg2,
      url: "https://bootstrap-project-onee.netlify.app/",
    },
    {
      title: t("projects.htmlBooststrap.eliteCropProject.title"),
      description: t("projects.description"),
      imgUrl: projImg9,
      url: "https://bootstrap-project-twoo.netlify.app/",
    },
  ];

  const htmlBooststrap = [
    {
      title: t("projects.HtmlCssJava.mindGame.title"),
      description: t("projects.description"),
      imgUrl: projImg4,
      url: "https://mind-game-project.netlify.app/",
    },
    {
      title: t("projects.HtmlCssJava.hangmanGame.title"),
      description: t("projects.description"),
      imgUrl: projImg3,
      url: "https://hangout-game.netlify.app/",
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
                  <h2 className="first-paragraph">{t("projects.projects")}</h2>
                  <p>{t("projects.projects_desc")}</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                      style={{ direction: "ltr" }}
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Html & CSS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Simple Games</Nav.Link>
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
                          {React.map((project, index) => {
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

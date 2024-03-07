import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const [t] = useTranslation();

  const React = [
    {
      title: "ChatBot",
      imgUrl: "https://i.ibb.co/gthm3Hb/ChatBot.webp",
      url: "https://chatbotv2.mygatein.com/#/login",
    },
    {
      title: t("projects.GraduationProject.title"),
      imgUrl: `https://i.ibb.co/SxC6C4D/LMS-Ain-shams.webp`,
      url: "https://drive.google.com/file/d/1XKfzSKEvQWMN1oy2mxsOZXppuKHrVFe2/view?usp=sharing",
    },
    {
      title: "Restico",
      imgUrl: "https://i.ibb.co/4PpHkc7/Restico.webp",
      url: "https://restecho.portal.smartgate-egypt.com/",
    },
    {
      title: "Clinc Markter",
      imgUrl: "https://i.ibb.co/mXb7bSP/Clinc.webp",
      url: "https://portal.clinicmarkter.niyat.sa/#/adminlogin",
    },
    {
      title: "EVOGYM",
      imgUrl: "https://i.ibb.co/vQ27c0R/EVOGYM.webp",
      url: "https://evogym-site.netlify.app/",
      githubLink: "https://github.com/ANT0NI0US/EvoGYM",
    },
  ];

  const HtmlCssJava = [
    {
      title: "Kasper website",
      imgUrl: "https://i.ibb.co/7zqq3Fs/dark-mode-project.webp",
      url: "https://kasper-template-website.netlify.app/",
      githubLink: "https://github.com/ANT0NI0US/KasperTemplateWebsite",
    },
    {
      title: t("projects.HtmlCssJava.firstProject.title"),
      imgUrl: "https://i.ibb.co/py9SBWx/html-css-first-project.webp",
      url: "https://html-css-first-project.netlify.app/",
    },
    {
      title: t("projects.HtmlCssJava.cartoonProject.title"),
      imgUrl: "https://i.ibb.co/yRV8PsK/cartoon-project.webp",
      url: "https://cartoon-projecttt.netlify.app/",
      githubLink: "https://github.com/ANT0NI0US/Cartoon",
    },
    {
      title: t("projects.HtmlCssJava.dashboard.title"),
      imgUrl: "https://i.ibb.co/TcQMCSJ/dashboard.webp",
      url: "https://dashboard-css-html.netlify.app/",
    },
    {
      title: t("projects.htmlBooststrap.bondiProject.title"),
      imgUrl: "https://i.ibb.co/z6jF1nR/bootstrap-project-one.webp",
      url: "https://bootstrap-project-onee.netlify.app/",
    },
    {
      title: t("projects.htmlBooststrap.eliteCropProject.title"),
      imgUrl: "https://i.ibb.co/02thynj/bootstrap-project-2.webp",
      url: "https://bootstrap-project-twoo.netlify.app/",
    },
  ];

  const htmlBooststrap = [
    {
      title: t("projects.HtmlCssJava.mindGame.title"),
      imgUrl: "https://i.ibb.co/xGn5qyc/mind-game.webp",
      url: "https://mind-game-project.netlify.app/",
    },
    {
      title: t("projects.HtmlCssJava.hangmanGame.title"),
      imgUrl: "https://i.ibb.co/vdmCMbD/hangman-game.webp",
      url: "https://hangout-game.netlify.app/",
    },
    {
      title: t("projects.HtmlCssJava.quiz.title"),
      imgUrl: "https://i.ibb.co/KsqhmPm/Quiz.webp",
      url: "https://timer-json-quiz.netlify.app/",
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
    </section>
  );
};

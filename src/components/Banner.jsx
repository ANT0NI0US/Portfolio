import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/headertestfour.svg";
import { FaDownload } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "animate.css";
import { useTranslation } from "react-i18next";

export const Banner = () => {
  const [t] = useTranslation();
  const downloadFile = () => {
    const fileId = "1iuGI6HqP9_O8LtnWWu1OGFlmmLITeS_H";
    const downloadUrl = `https://drive.google.com/uc?id=${fileId}`;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "Antonious nasr CV");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="text-banner-cont">
                    <span className="tagline">{t("banner.welcome_portfolio")}</span>
                    <h1>
                      {t("banner.hi_iam")}
                      <span>{t("banner.antonious_nasr")}</span>
                    </h1>
                    <div className="text-animate">
                      <h3>{t("banner.frontend_developer")}</h3>
                    </div>
                    <p>{t("banner.banner_desc")}</p>
                    <div
                      onClick={() => downloadFile()}
                      className="connect-us-btn"
                    >
                      <div>{t("banner.my_cv")}</div>
                      <div className="download-cv-cont">
                        <FaDownload size={25} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="photo-column">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Header Img"
                    className="header_img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={12} xl={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <div className="social-icon">
                    <a
                      href="https://www.linkedin.com/in/antonious-nasr-a20887196"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://github.com/ANT0NI0US"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

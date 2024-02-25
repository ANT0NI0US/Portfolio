import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeProvider";
import lightLogo from "../assets/img/7PN0BI-LogoMakr.png";
import darkLogo from "../assets/img/my-logo.png";

export const Footer = () => {
  const { theme } = useTheme();
  const [t] = useTranslation();

  const getLogo = () => {
    return theme === "light" ? lightLogo : darkLogo;
  };

  const getWave = () => {
    return theme === "light" ? "light" : "dark";
  };

  return (
    <footer className="footer">
      <div className="waves">
        <div className={`wave ${getWave()}`} id="wave1"></div>
        <div className={`wave ${getWave()}`} id="wave2"></div>
        <div className={`wave ${getWave()}`} id="wave3"></div>
        <div className={`wave ${getWave()}`} id="wave4"></div>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="head">
              <img src={getLogo()} alt="Logo" />
            </div>
            <div className="body">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/antonious-nasr-a20887196"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/ANT0NI0US"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </Col>
          <Col
            size={12}
            sm={6}
            className="text-center text-sm-end social-media"
          >
            <div className="side">
              <FaLocationDot />
              <p>{t("footer.egypt-cairo")}</p>
            </div>
            <div className="side">
              <MdEmail />
              <p>antoniousnasr3@gmail.com</p>
            </div>
            <div className="side">
              <FaPhoneVolume />
              <p>{t("footer.my-phone-number")}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text">
        <p>{t("footer.the-year")}</p>
      </div>
    </footer>
  );
};

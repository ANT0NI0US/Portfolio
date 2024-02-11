import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/my-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div class="head">
              <img src={logo} alt="Logo" />
            </div>
            <div class="body">
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
          </Col>
          <Col
            size={12}
            sm={6}
            className="text-center text-sm-end social-media"
          >
            <div class="side">
              <FaLocationDot />
              <p>Egypt, Cairo</p>
            </div>
            <div class="side">
              <MdEmail />
              <p>antoniousnasr3@gmail.com</p>
            </div>
            <div class="side">
              <FaPhoneVolume />
              <p>01285551479</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div class="text">
        <p>© 2024</p>
      </div>
    </footer>
  );
};

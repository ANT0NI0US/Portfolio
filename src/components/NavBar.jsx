import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../assets/img/my-logo.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeProvider";
import { useMediaQuery } from "react-responsive";

export const NavBar = () => {
  const { toggleTheme, theme } = useTheme();
  const [t, i18n] = useTranslation();
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [dropStart, setDropStart] = useState(false);

  // Use useMediaQuery hook to check for screen size changes
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setDropStart(isMobile); // Update dropStart state when screen size changes
  }, [isMobile]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedTheme, setSelectedTheme] = useState("dark");

  const handleLanguageChange = (languageType) => {
    setSelectedLanguage(languageType);
    i18n.changeLanguage(languageType);
  };

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  useEffect(() => {
    const getCookie = (name) => {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
          return cookie.substring(name.length + 1);
        }
      }
      return null;
    };
    const languageCookie = getCookie("language");
    setSelectedLanguage(languageCookie);
  }, []);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : "not-scrolled"}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {/* className="ms-auto" */}
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                {t("navbar.home")}
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                {t("navbar.skills")}
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                {t("navbar.projects")}
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <HashLink to="#connect">
                <button className="vvd" type="button" aria-label="Connect US">
                  {t("navbar.let_connect")}
                </button>
              </HashLink>
            </span>

            {/*<div className="select-cont">
              <div className="langauage-icon-cont">
                <MdOutlineLanguage />
              </div>
              <select value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
              </select>
            </div>*/}

            <div className="select-cont">
              <div className="langauage-icon-cont">
                <NavDropdown
                  title={t("navbar.settings")}
                  id="settings-dropdown"
                  className={`${
                    selectedLanguage === "en" ? "en" : "ar"
                  } ms-auto`}
                >
                  <NavDropdown
                    className={`${
                      selectedLanguage === "en"
                        ? dropStart
                          ? "mid"
                          : "dropstart"
                        : dropStart
                        ? "mid"
                        : "dropend"
                    }`}
                    title={t("navbar.darkMode")}
                  >
                    <NavDropdown.Item
                      onClick={() => toggleTheme("light")}
                      active={selectedTheme === "light"}
                    >
                      {t("navbar.light")}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => toggleTheme("dark")}
                      active={selectedTheme === "dark"}
                    >
                      {t("navbar.dark")}
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={t("navbar.languages")}
                    className={`${
                      selectedLanguage === "en"
                        ? dropStart
                          ? "mid"
                          : "dropstart"
                        : dropStart
                        ? "mid"
                        : "dropend"
                    }`}
                  >
                    <NavDropdown.Item
                      onClick={() => handleLanguageChange("en")}
                      active={selectedLanguage === "en"}
                    >
                      {t("navbar.english")}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => handleLanguageChange("ar")}
                      active={selectedLanguage === "ar"}
                    >
                      {t("navbar.arabic")}
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

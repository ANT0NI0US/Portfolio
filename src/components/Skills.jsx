import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
export const Skills = () => {
  const [t, i18n] = useTranslation();
  const [progressData, setProgressData] = useState([{}]);

  useEffect(() => {
    setProgressData([
      {
        progressValue: 0,
        progressEndValue: 96,
        name: t("skills.all_skills.Core_Languages.Core_Language"),
        type: [
          "Html",
          "CSS",
          "JavaScript",
          "TypeScript",
          "C++",
          "C#",
          "Python",
        ],
      },
      {
        progressValue: 0,
        progressEndValue: 95,
        name: t("skills.all_skills.Frontend_Frameworks.Frontend_Framework"),
        type: ["React", "Vue"],
      },
      {
        progressValue: 0,
        progressEndValue: 100,
        name: t("skills.all_skills.Styling_Frameworks.Styling_Framework"),
        type: ["Material UI", "Chakra UI", "Tailwind CSS", "Bootstrap"],
      },
      {
        progressValue: 0,
        progressEndValue: 100,
        name: t("skills.all_skills.Version_Control.Version_Control"),
        type: ["Git"],
      },
      {
        progressValue: 0,
        progressEndValue: 100,
        name: t("skills.all_skills.Tools_Utilities.Tools_Utilities"),
        type: ["Webpack", "npm"],
      },
      {
        progressValue: 0,
        progressEndValue: 100,
        name: t("skills.all_skills.State Management.State Management"),
        type: ["Redux"],
      },
      {
        progressValue: 0,
        progressEndValue: 100,
        name: t(
          "skills.all_skills.Performance_Optimization.Performance_Optimization"
        ),
        type: [t("skills.all_skills.Performance_Optimization.type")],
      },
      {
        progressValue: 0,
        progressEndValue: 95,
        name: t("skills.all_skills.Soft_Skills.Soft_Skills"),
        type: [
          t("skills.all_skills.Soft_Skills.type.Effective_communication"),
          t("skills.all_skills.Soft_Skills.type.Proficient_English"),
        ],
      },
    ]);
  }, [i18n.language]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const skillsSection = document.getElementById("skills");
      const skillsSectionTop = skillsSection.offsetTop;
      const skillsSectionHeight = skillsSection.clientHeight;

      // Adjust the threshold as needed
      const threshold = 0.5;

      if (
        scrollPosition > skillsSectionTop - window.innerHeight * threshold &&
        scrollPosition < skillsSectionTop + skillsSectionHeight
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Reset progress values to zero every time the component becomes visible
      setProgressData((prevData) =>
        prevData.map((bar) => ({ ...bar, progressValue: 0 }))
      );

      const intervalId = setInterval(() => {
        setProgressData((prevData) => {
          const newData = prevData.map((bar) => {
            if (bar.progressValue < bar.progressEndValue) {
              bar.progressValue += 1;
            }
            return bar;
          });

          return newData;
        });
      }, 60); // Adjust the interval time as needed

      return () => clearInterval(intervalId);
    }
  }, [isVisible]);

  const getConicGradient = (value) => {
    return `conic-gradient( #47245a ${Math.min(value, 100)}%, white ${Math.min(
      value,
      100
    )}%)`;
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="first-paragraph">{t("skills.skills")}</h2>
              <p>{t("skills.skills_desc")}</p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {progressData.map((bar, index) => (
                  <div key={index} className="progress-cont">
                    <div
                      className="circular-progress"
                      style={{
                        background: getConicGradient(bar.progressValue),
                      }}
                    >
                      <div className="value-container">{`${Math.round(
                        bar.progressValue
                      )}%`}</div>
                    </div>
                    <div
                      className={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
                    >
                      <div className="skill-name">{bar.name}</div>
                      <ul className="skill-name-types">
                        {bar.type &&
                          bar.type.map((type, typeIndex) => (
                            <li key={typeIndex} className="skill-type">
                              {type}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

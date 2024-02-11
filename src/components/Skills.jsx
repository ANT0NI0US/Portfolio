import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";
import { useEffect, useState } from "react";

export const Skills = () => {
  const [progressData, setProgressData] = useState([
    {
      progressValue: 0,
      progressEndValue: 96,
      name: "Core Languages:",
      type: ["Html", "CSS", "JavaScript"],
    },
    {
      progressValue: 0,
      progressEndValue: 95,
      name: "Frontend Libraries & Frameworks:",
      type: ["React", "Vue"],
    },
    {
      progressValue: 0,
      progressEndValue: 100,
      name: "Styling  Frameworks:",
      type: ["Material UI", "Chakra UI", "Tailwind CSS", "Bootstrap"],
    },
    {
      progressValue: 0,
      progressEndValue: 100,
      name: "Version Control:",
      type: ["Git"],
    },
    {
      progressValue: 0,
      progressEndValue: 100,
      name: "Tools & Utilities:",
      type: ["Webpack", "npm"],
    },
    {
      progressValue: 0,
      progressEndValue: 100,
      name: "State Management:",
      type: ["Redux"],
    },
    {
      progressValue: 0,
      progressEndValue: 100,
      name: "Performance Optimization:",
      type: ["Enhancing website speed and performance"],
    },
    {
      progressValue: 0,
      progressEndValue: 95,
      name: "Soft Skills:",
      type: [
        "Effective collaboration and communication",
        "Proficient in English",
      ],
    },
  ]);

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
              <h2 className="first-paragraph">Skills</h2>
              <p>
                As a dedicated frontend developer, I possess a robust skill set
                in creating engaging and responsive user interfaces. Proficient
                in both design and functionality, I bring expertise in various
                frontend technologies to deliver seamless and visually appealing
                web experiences. My skills encompass the essential languages and
                tools, ensuring a well-rounded approach to web development.
              </p>

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
                    <div className="skill-name">{bar.name}</div>
                    <ul className="skill-name-types">
                      {/* Display type if it exists */}
                      {bar.type &&
                        bar.type.map((type, typeIndex) => (
                          <li key={typeIndex} className="skill-type">
                            {type}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

import { Col } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ title, githubLink, imgUrl, url }) => {
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <p>{title}</p>
        <div className="proj-txtx">
          <FaLink
            onClick={() => handleLinkClick(url)}
            data-toggle="tooltip"
            data-placement="bottom"
            title={url}
          />
          {githubLink && (
            <FaGithub
              onClick={() => handleLinkClick(githubLink)}
              data-toggle="tooltip"
              data-placement="bottom"
              title={githubLink}
            />
          )}
        </div>
      </div>
    </Col>
  );
};

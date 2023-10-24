
import "./portfolio.scss";
import { projects } from "../../db/projects";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { live } from "../../assets";
export default function Portfolio() {
  return (
    <div className="portfolio" id="projects">
      <h1 className="head-sec">Projects</h1>

      <div className="imgs">
      </div>
      <div className="container">
        {projects.map((project) => (
          <div className="project flex items-center" style={{ backgroundColor: project.color }} key={project.id}>
            <div className="item" >
              <img
                src={project.img}
                alt="image"
              />
            </div>
            <div className="hover" style={{ backgroundColor: project.color }} >
              <h3>{project.title}</h3>
              <div className="links">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={live} alt="" />
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}



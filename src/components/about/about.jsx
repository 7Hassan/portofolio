
import "./about.scss";
import { about } from "../../db/about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return <div className="about w-[100%]" id="about">
    <h1 className="head-sec">About</h1>
    <div className="about-container">
      <div className="info">
        <div className="title">
          <h2>Full Stack Developer</h2>
          <div className="text">
            Seeking a challenging position within a reputable organization in which I can develop both my technical and my personal skills to be a beneficial team member and where I can build a career with committed and dedicated people whom I will work with all my potential and enhance my skills.
          </div>
        </div>
        <div className="ul-container">
          <ul>
            {
              about.map((obj, i) => {
                if (i < 3)
                  return <li key={obj.title} >
                    <FontAwesomeIcon icon={faChevronRight} className="text-[red]" />
                    <div>
                      <span>{obj.title}:</span>
                      {obj.content}
                    </div>
                  </li>
              })
            }
          </ul>
          <ul>
            {
              about.map((obj, i) => {
                if (i > 3)
                  return <li key={obj.title} >
                    <FontAwesomeIcon icon={faChevronRight} className="text-[red]" />
                    <div>
                      <span>{obj.title}:</span>
                      {obj.content}
                    </div>
                  </li>
              })
            }
          </ul>


        </div>
      </div>
    </div>

  </div >

}

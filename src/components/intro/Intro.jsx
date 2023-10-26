import "./intro.scss";
import { init } from "ityped";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useRef, useState } from "react";
import { down, man, cv } from "../../assets"
import { info } from "../../db/info";

export default function Intro() {
  const textRef = useRef();
  const [text, setText] = useState(true);


  useEffect(() => {
    setText(false)
    if (text) return
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: info.work.companies
    });
  }, [text]);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={man} alt="" loading="lazy" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>{info.name}</h1>
          <h3>
            <span>{info.job}</span>
            <br />
            <span className="type">{info.work.type}</span>
            <span ref={textRef}> </span>
          </h3>
          <div className="info mt-[15px] ml-[20px]">
            <div className="links flex gap-[30px]">
              <a href={info.facebook} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-[45px] hover:text-blue-600 " />
              </a>
              <a href={info.linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-[45px] hover:text-blue-700 " />
              </a>
              <a href={info.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-[45px]" />
              </a>
              <a href={info.cv} className="ml-[-5px] w-[45px]" target="_blank" rel="noreferrer">
                <img src={cv} alt="cv"  loading="lazy" />
              </a>
              
            </div>
          </div>
        </div>
        <a href="#about" className="projects">
          <img src={down} alt="image"  loading="lazy" />
        </a>
      </div>
    </div>
  );
}

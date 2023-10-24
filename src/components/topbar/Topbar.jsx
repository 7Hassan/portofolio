import "./topbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { info } from "../../db/info";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Web Developer
          </a>
          <div className="itemContainer">
            <FontAwesomeIcon icon={faUser} className="text-[15px] mr-[5px]" />
            <span>{info.phone}</span>
          </div>
          <a href={`mailto:${info.email}`} target="_blank" className="itemContainer" rel="noreferrer">
            <FontAwesomeIcon icon={faMailchimp} className="text-[20px] mr-[5px]" />
            <span>{info.email}</span>
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./testimonials.scss";
import { testimonials } from "../../db/testimonials";
import { rightArrow } from "../../assets";
export default function Testimonials() {

  return (
    <div className="testimonials h-[80vh]" id="testimonials">
      <h1 className="head-sec">Testimonials</h1>
      <div className="container">
        {testimonials.map((d) => (
          <div key={d.id} className={`card ${d.featured && "featured"}`}>
            <div className="top">
              <img src={rightArrow} className="left" alt=""  loading="lazy"/>
              <img
                className="user"
                src={d.img}
                loading="lazy"
                alt=""
              />
              <img className="right" src={d.icon} alt=""  loading="lazy"/>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}

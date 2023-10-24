import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion";
import { experiences } from "../../db/experience";
import SectionWrapper from "../../utils/SectionWrapper";
import { textVariant } from "../../utils/motion"
import "./experience.scss";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: '15px'
      }}
      date={experience.date}
      dateClassName='date'
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: '0 0 0 4px #ccc, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)'
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            loading="lazy"
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point) => (
          <li
            key={point}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} id='works'>
        <h1 className="head-sec">Experience</h1>
      </motion.div>
      <div className='flex flex-col'>
        <VerticalTimeline
          animate={true}
          lineColor='#ccc'
        >
          {experiences.map((experience) => (
            <ExperienceCard
              key={`experience- ${experience.id}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

ExperienceCard.propTypes = {
  experience: PropTypes.object
}
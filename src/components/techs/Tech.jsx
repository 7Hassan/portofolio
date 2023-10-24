
import { skills } from "../../db/skills";
import SectionWrapper from "../../utils/SectionWrapper";

const Tech = () => {
  const { content, technologies } = skills
  return <div className="skills" id="skills">

    <h1 className="head-sec" >Skills</h1>
    <div className="text-[20px] text-[#585f67] space-[1.1px] mb-[30px]">
      {content}
    </div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className="skill" key={technology.name}>
          <div className='w-28 h-28'>
            <img src={technology.icon} alt="" loading="lazy" />
          </div>
          <div className="name flex items-center flex-col flex-nowrap">{technology.name}</div>
        </div>
      ))}
    </div>
  </div>
};

export default SectionWrapper(Tech, "");


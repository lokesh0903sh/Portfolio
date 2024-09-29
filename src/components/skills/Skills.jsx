import React, { useState } from 'react'
import { SKILLS } from '../../utils/data'
import SkillsCard from './SkillCard/SkillsCard'
import "./Skills.css";
import SkillInfoCard from '../SkillInfoCard/SkillInfoCard'

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data)=>{
        setSelectedSkill(data);
    };

  return (
    <section className='skills-container'>
        <h5>Technical Proficiency</h5>
        <div className='skills-content'>
            <div className='skills'>
                {
                    SKILLS.map((item)=>(
                        <SkillsCard key={item.title}
                            iconUrl={item.icon}
                            title={item.title} 
                            isActive={selectedSkill.title === item.title}
                            onClick={()=>{
                                handleSelectSkill(item);
                            }}
                        />
                    ))
                }
            </div>
            <div className='skills-info'>
                <SkillInfoCard heading={selectedSkill.title} skill={selectedSkill.skills}/>
            </div>
        </div>
    </section>
  )
}

export default Skills
import DropDown from "./common/dropDown"
import {useState} from "react";

const SkillsAndHobbies = (props) => {
  const { skills, softSkills, hobbies } = props.data;
  const [activeTab, setActiveTab] = useState('');

  const clickHandler = ( id ) => {

    if (activeTab === id) {
      return setActiveTab('');
    }

    return setActiveTab(id);
  };

  return(
    <div className='skill-and-hobbies'>
      <DropDown
        onClick={() => clickHandler('soft')}
        isOpen={activeTab === 'soft'}
        id="soft"
        title={'Soft Skills'}
        data={softSkills}
      />
      <DropDown
        onClick={() => clickHandler('skills')}
        isOpen={activeTab === 'skills'}
        id="skills"
        title={'Skills'}
        data={skills}
      />
      <DropDown
        onClick={() => clickHandler('hobbies')}
        isOpen={activeTab === 'hobbies'}
        id="hobbies"
        title={'Hobbies'}
        data={hobbies}
      />
    </div>
  )
}

export default SkillsAndHobbies;
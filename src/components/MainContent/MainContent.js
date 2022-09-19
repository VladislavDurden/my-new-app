import Data from "../../data/cv-data.json";

import MainPhoto from "../../assets/main-photo.jpg"
import SkillsAndHobbies from "./SkillsAndHobbies";

const MainContent = () => {

  return(
    <div className='main-content'>
      <div className='main-content__personal'>
        <div className='top-wrapper'>
          <img src={MainPhoto} alt="Vladislav Petrovskiy"/>

          <span className="neon" data-text="U">
          VLA
          <span className="flicker-fast">D</span>
          ISLAV
            &nbsp;
            PETROV
          <span className="flicker-slow">S</span>
          <span className="flicker-fast">K</span>
          IY
        </span>
        </div>
        <SkillsAndHobbies data={Data}/>
      </div>
      <div className='main-content__info'>

      </div>
    </div>
  )
}

export default MainContent;
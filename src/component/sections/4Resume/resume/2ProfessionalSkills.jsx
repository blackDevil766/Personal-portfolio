import React from "react";
import Card from "../resumeCreator/1EducationCardCreator";

import Skill from "../resumeCreator/2professionalCreator";

function ProfessionalSkills(props) {
    return (
        <div className={props.class}>

           

            <div className="right-details">
                <p className="p-detalis">Features</p>
                <h4 className="h-details">Design Skill</h4>


                <Skill heading="html5" percent="95%" />
                <Skill heading="css3" percent="90%" />
                <Skill heading="javascript" percent="80%" />
                <Skill heading="React" percent="90%" />
                <Skill heading="RESTful API" percent="50%" />

            </div>



             <div className="left-details">
                <p className="p-detalis">Features</p>
                <h4 className="h-details">Development Skill</h4>

                <Skill heading="mongo DB" percent="55%" />
                <Skill heading="Git & GitHub" percent="70%" />
                <Skill heading="ES6" percent="70%" />
                <Skill heading="Node js" percent="55%" />
                <Skill heading="python" percent="40%" />

            </div>
        </div>
    )
}


export default ProfessionalSkills;
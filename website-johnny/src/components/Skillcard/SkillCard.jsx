
import React from "react";
import './SkillCard.css'

function SkillCard({title, abilities}) {
    return (
        <div className="SkillCard">
            <h3>{title}</h3>
            <ul>
                {abilities.map((ability, index) => (
                    <li key={index}>{ability}</li>
                ))}
            </ul>
        </div>
    )
}

export default SkillCard;
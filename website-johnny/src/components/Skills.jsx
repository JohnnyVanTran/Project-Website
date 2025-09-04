import React from "react";
import SkillCard from "./Skillcard/SkillCard";
import { skills } from "../Data/SkillsData";
import '../component-styling/SkillsSection.css'

function Skills() {
    return (
        <section className="Skills-section">
            <h2 className="My-Skills">My Coding Skills</h2>
            <div className="Skill-grid">
                {skills.map((skill, index) => (
                    <SkillCard key={index} title={skill.title} abilities={skill.abilities}/> ))
                }
            </div>

        </section>
    )
}

export default Skills;
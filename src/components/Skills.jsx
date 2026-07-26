import React from 'react';
import '../css/All.css';
import profile from '../data/profile';

export default function Skills() {
  const skills = profile.skills ?? [];
  if (skills.length === 0) return null;

  return (
    <div className="card" id="skills">
      <div className="card-title">Skills</div>
      <div className="skills-grid">
        {skills.map((group, i) => (
          <div className="skill-group" key={i}>
            <div className="skill-group-name">{group.group}</div>
            <ul className="skill-items">
              {group.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

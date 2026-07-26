import React from 'react';
import '../css/All.css';
import profile from '../data/profile';

export default function Education() {
  const education = profile.education ?? [];
  if (education.length === 0) return null;

  return (
    <div className="card" id="education">
      <div className="card-title">Education</div>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3 className="education-university">{edu.university}</h3>
              <div className="education-period">
                <span>{edu.period}</span>
                <span className="education-location">{edu.location}</span>
              </div>
            </div>

            <div className="education-details">
              <p className="education-degree">{edu.degree}</p>
            </div>

            {edu.courses?.length > 0 && (
              <div className="education-courses">
                <div>Courses:</div>
                <ul>
                  {edu.courses.map((course, i) => (
                    <li key={i}>
                      {course.name}
                      {course.grade != null && ` (${course.grade})`}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

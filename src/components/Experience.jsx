import React, { useState } from 'react';
import '../css/Experience.css';
import profile from '../data/profile';

// "2025.09 - Present" → 竖排的 "Present\n–\n2025.09"
function formatPeriodLabel(period) {
  const [start, end] = period.split(' - ').map((s) => s.trim());
  if (!start || !end) return period;
  return `${end}\n–\n${start}`;
}

export default function Experience() {
  const experiences = profile.experiences ?? [];
  const [selectedTag, setSelectedTag] = useState('');

  if (experiences.length === 0) return null;

  const types = [...new Set(experiences.map((e) => e.type))];
  const filtered = selectedTag ? experiences.filter((e) => e.type === selectedTag) : experiences;

  return (
    <div className="card" id="experience">
      <div className="publications-select">
        <div className="card-title">Experience</div>
        <select
          className="tag-select-filter"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          aria-label="Filter by type"
        >
          <option value="">All</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="timeline-container">
        {filtered.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-label">
              <div className={`exp-type ${exp.type.toLowerCase()}`}>{exp.type}</div>
              <div className="timeline-period-label">{formatPeriodLabel(exp.period)}</div>
            </div>

            <div className="timeline-content">
              <div className="org-logo-container">
                {exp.organization.logo ? (
                  <img
                    src={exp.organization.logo}
                    alt={`${exp.organization.name} logo`}
                    className="org-logo"
                  />
                ) : (
                  <div className="org-logo-fallback">{exp.organization.short || '···'}</div>
                )}
              </div>

              <div className="exp-container">
                <div className="timeline-header">
                  <div className="exp-organization">
                    {exp.organization.link ? (
                      <a
                        className="exp-organization-name"
                        href={exp.organization.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.organization.name}
                      </a>
                    ) : (
                      <span className="exp-organization-name">{exp.organization.name}</span>
                    )}
                    <div className="exp-role">{exp.role}</div>
                  </div>

                  <div className="exp-period">
                    <div>{exp.period}</div>
                    <div className="exp-location">{exp.location}</div>
                  </div>
                </div>

                {exp.projects?.length > 0 && (
                  <ul className="exp-projects">
                    {exp.projects.map((proj, i) => (
                      <li key={i}>
                        {proj.name}
                        {proj.roles?.map((role, idx) => (
                          <span key={idx} className="role-tag">
                            {role}
                          </span>
                        ))}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

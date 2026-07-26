import React from 'react';
import '../css/All.css';
import profile from '../data/profile';

export default function SelectedAwards() {
  const awards = profile.awards ?? [];
  if (awards.length === 0) return null;

  return (
    <div className="card" id="awards">
      <div className="card-title">Selected Awards</div>
      <div className="awards-list">
        {awards.map((award, index) => (
          <div key={index} className="award-item">
            <span className="award-icon">✦</span>
            <span className="award-text">
              {award.text}
              <span className="award-highlight">{award.highlight}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

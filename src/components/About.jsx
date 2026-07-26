import React from 'react';
import '../css/All.css';
import profile from '../data/profile';

export default function About() {
  const { intro, interests, interestsTitle, callout } = profile.about;

  return (
    <div className="about" id="about">
      <div className="intro-text">
        <div dangerouslySetInnerHTML={{ __html: intro }} />

        {interests?.length > 0 && (
          <>
            <br />
            <div className="card-title">{interestsTitle || 'Research Interests'}</div>
            <ul className="interest-list">
              {interests.map((item, i) => (
                <li key={i}>
                  <strong>{item.title}:</strong> {item.body}
                </li>
              ))}
            </ul>
          </>
        )}

        {callout && <div className="callout" dangerouslySetInnerHTML={{ __html: callout }} />}

      </div>
    </div>
  );
}

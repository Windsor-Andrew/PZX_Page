import React from 'react';
import '../css/All.css';
import profile from '../data/profile';

export default function More() {
  const items = profile.more ?? [];
  if (items.length === 0) return null;

  return (
    <div className="card" id="more">
      <div className="card-title">Something more...</div>
      {items.map((line, i) => (
        <div className="more" key={i}>
          {line}
        </div>
      ))}
    </div>
  );
}

import React from 'react';
import '../css/All.css';
import profile from '../data/profile';

export default function News() {
  const news = profile.news ?? [];
  if (news.length === 0) return null;

  return (
    <div className="card" id="news">
      <div className="card-title">News</div>
      <ul className="news-list">
        {news.map((item, i) => (
          <li key={i}>
            <div className="news-time">{item.time}</div>
            <div className="news-content" dangerouslySetInnerHTML={{ __html: item.content }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useState } from 'react';
import '../css/Publications.css';
import profile from '../data/profile';

const MY_NAME = profile.nameEn;

// 每个 tag 一个颜色，没配到的用默认灰
const tagStyleMap = {
  Selected: '#242424',
  Embedded: '#1d4ed8',
  'C++': '#1e40af',
  'Computer Vision': '#2563eb',
  Communications: '#4f46e5',
  SDR: '#4338ca',
  MATLAB: '#3b82f6',
  Hardware: '#0ea5e9',
  PLC: '#0284c7',
  Measurement: '#0369a1',
};

function Authors({ authors }) {
  return (
    <div className="publication-authors">
      {authors.map((a, i) => {
        const isMe = a.name === MY_NAME;
        return (
          <span key={i}>
            <span className={isMe ? 'author-self' : undefined}>{a.name}</span>
            {a.role === 'first' && <span className="author-mark">*</span>}
            {a.role === 'corresponding' && <span className="author-mark">†</span>}
            {i < authors.length - 1 && ', '}
          </span>
        );
      })}
    </div>
  );
}

export default function Publications() {
  const publications = profile.publications ?? [];
  const [selectedYear, setSelectedYear] = useState('');
  const [openId, setOpenId] = useState(null);

  if (publications.length === 0) return null;

  const allYears = [...new Set(publications.map((p) => String(p.year ?? 'Unknown')))].sort(
    (a, b) => Number(b) - Number(a)
  );

  const filtered = selectedYear
    ? publications.filter((p) => String(p.year) === selectedYear)
    : publications;

  const byYear = filtered.reduce((acc, p) => {
    const key = String(p.year ?? 'Unknown');
    (acc[key] ||= []).push(p);
    return acc;
  }, {});

  const sortedYears = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="card" id="publications">
      <div className="publications-select">
        <div className="card-title">{profile.publicationsTitle || 'Publications'}</div>
        <select
          className="tag-select-filter"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          aria-label="Filter by year"
        >
          <option value="">All years</option>
          {allYears.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {sortedYears.map((year) => (
        <div className="publications-year" key={year}>
          <div className="year-heading">{year}</div>
          <div className="publications-list">
            {byYear[year].map((p) => (
              <div className="publication-card" key={p.id}>
                <div className="publication-thumb">
                  {p.image ? (
                    <img src={p.image} alt={p.title} />
                  ) : (
                    <span className="thumb-placeholder">PZX</span>
                  )}
                </div>

                <div className="publication-content">
                  <button
                    className="publication-title"
                    onClick={() => setOpenId(openId === p.id ? null : p.id)}
                    aria-expanded={openId === p.id}
                  >
                    {p.title}
                  </button>

                  {openId === p.id && p.abstract && (
                    <p className="publication-abstract">{p.abstract}</p>
                  )}

                  {p.period && <div className="publication-period">{p.period}</div>}

                  {p.authors?.length > 1 && <Authors authors={p.authors} />}

                  {p.venues?.length > 0 && (
                    <div className="publication-venue">
                      {p.venues.map((v, i) => (
                        <span key={i} className={`venue-tag ${v.type || 'wip'}`}>
                          {v.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {(p.links?.paper || p.links?.code || p.links?.msg) && (
                    <div className="publication-links">
                      {p.links.paper && (
                        <a href={p.links.paper} target="_blank" rel="noopener noreferrer">
                          Paper
                        </a>
                      )}
                      {p.links.code && (
                        <a href={p.links.code} target="_blank" rel="noopener noreferrer">
                          Code
                        </a>
                      )}
                      {p.links.msg && <span className="publications-msg">{p.links.msg}</span>}
                    </div>
                  )}

                  {p.tags?.length > 0 && (
                    <div className="publication-tags">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="tag-item"
                          style={{ color: tagStyleMap[t] || '#9ca3af' }}
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

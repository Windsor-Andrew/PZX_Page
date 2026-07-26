import React from 'react';
import '../css/Hero.css';
import { FaGithub, FaLinkedin, FaRss } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaGoogleScholar } from 'react-icons/fa6';
import profile from '../data/profile';

export default function Hero() {
  const { socials } = profile;

  // url 为空的图标直接不渲染，免得点了没反应
  const links = [
    { icon: <MdEmail />, url: socials.email ? `mailto:${socials.email}` : '', label: 'Email' },
    { icon: <FaGithub />, url: socials.github, label: 'GitHub' },
    { icon: <FaGoogleScholar />, url: socials.scholar, label: 'Google Scholar' },
    { icon: <FaLinkedin />, url: socials.linkedin, label: 'LinkedIn' },
    { icon: <FaRss />, url: socials.blog, label: 'Blog' },
  ].filter((l) => l.url);

  return (
    <div className="hero-meta">
      {profile.quote && <div className="hero-quote">{profile.quote}</div>}

      <img src={profile.avatar} alt={profile.nameEn} className="profile-pic" />

      <div className="meta-name">{profile.nameEn}</div>
      {profile.nameZh && <div className="meta-name-zh">{profile.nameZh}</div>}

      <div className="meta-description">
        {profile.taglines.map((t, i) => (
          <div key={i}>{t}</div>
        ))}
      </div>

      <div className="meta-link">
        {profile.buttons.map((b, i) =>
          b.url ? (
            <a
              key={i}
              className="meta-linkitem"
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {b.label}
            </a>
          ) : (
            <span key={i} className="meta-linkitem disabled" title="Coming soon">
              {b.label}
            </span>
          )
        )}
      </div>

      <div className="contact-small">
        {links.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label={item.label}
            title={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>

      <div className="small-text">Last Updated: {profile.lastUpdated}</div>
    </div>
  );
}

import React from 'react';
import profile from '../data/profile';

export default function Footer() {
  return (
    <footer className="site-footer">
      © {new Date().getFullYear()} {profile.nameEn} · Built with React &amp; Vite ·{' '}
      <a href={profile.socials.blog} target="_blank" rel="noopener noreferrer">
        {profile.socials.blog.replace('https://', '')}
      </a>
    </footer>
  );
}

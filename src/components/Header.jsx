import React, { useEffect, useState } from 'react';
import '../css/Header.css';
import profile from '../data/profile';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'news', label: 'News' },
  { id: 'skills', label: 'Skills' },
  { id: 'publications', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'more', label: 'More' },
];

// 把名字里第一个 fancyLetter 拆出来，好在它头上放那颗转动的星星
function renderName(name, letter) {
  const idx = name.indexOf(letter);
  if (idx === -1) return name;
  return (
    <>
      {name.slice(0, idx)}
      <span className="fancy-i">{letter}</span>
      {name.slice(idx + 1)}
    </>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('about');

  // 滚动时高亮当前所在的板块
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-56px 0px -60% 0px', threshold: 0 }
    );

    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <header className={`header-wrapper ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="header-name">
          <img src="/favicon.svg" alt="" className="header-logo" />
          <div className="name-main">{renderName(profile.nameEn, profile.fancyLetter)}</div>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
        </button>

        <nav className={`header-nav ${menuOpen ? 'show' : ''}`}>
          {NAV.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${active === item.id ? 'active' : ''}`}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

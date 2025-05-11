import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import '/src/styles/header.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/teach', label: 'Teach' },
  { path: '/shooting', label: 'Shooting' },
  { path: '/mental', label: 'Mental' },
  { path: '/skills', label: 'Skills' },
  { path: '/equipment', label: 'Equipment' },
  { path: '/about', label: 'About' },
  { path: '/recommendations', label: "Do's & Don'ts" },
  { path: '/videos', label: 'Videos' }, // Added video link
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="header bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Basketball Image with Clouds */}
        <div className="flex items-center">
          <img
            src="/assets/basketball-cloud.webp" // This should be in your public/assets folder
            alt="Basketball with Clouds"
            className="w-16 h-16 mr-4 rounded-full"
          />
          <h1 className="text-2xl font-bold">Blue Sky Basketball</h1>
        </div>

        {/* Hamburger Icon */}
        <div
          ref={hamburgerRef}
          className="hamburger flex flex-col gap-2 cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>

        {/* Mobile Menu */}
        <nav
          ref={menuRef}
          className={`mobile-menu ${menuOpen ? 'active' : ''}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-white py-2 px-4 hover:bg-blue-700"
              onClick={() => setMenuOpen(false)} // Close menu when a link is clicked
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Navigation */}
        <nav className="navbar hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white text-lg px-4 py-2 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

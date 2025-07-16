// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo2 from '../assets/logo4.png';
import { FiMenu, FiX } from 'react-icons/fi';

const ACTIVE_COLOR = 'text-[#DF8534]'; // theme red‑orange

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const { pathname } = useLocation();

  /* ---------- helpers ---------- */
  // top‑level item active?
  const isTopActive = (item) => {
    if (item.href === '/') return pathname === '/';                    // Home
    if (pathname.startsWith(item.href)) return true;                  // exact or child
    if (item.dropdown)
      return item.dropdown.some((d) => pathname.startsWith(d.href));   // any sub‑route
    return false;
  };

  // dropdown link active?
  const isSubActive = (href) => pathname === href;

  /* ---------- scroll + route change ---------- */
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  /* ---------- nav data ---------- */
  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      dropdown: [
        { name: 'Vision & Mission', href: '/about/vision' },
        { name: 'Company Overview', href: '/about/overview' },
      ],
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Construction', href: '/services/construction' },
        { name: 'Architecture', href: '/services/architecture' },
        { name: 'Interior Designing', href: '/services/interior' },
        { name: 'Vastushastra', href: '/services/vastu' },
      ],
    },
    {
      name: 'Buy/Sell Properties',
      href: '/properties',
      dropdown: [
        { name: 'ROI Property', href: '/properties/roi' },
        { name: 'Residential Property', href: '/properties/residential' },
        { name: 'Commercial Property', href: '/properties/commercial' },
        // { name: 'Farmhouses/Villas', href: '/properties/villa' },
      ],
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  /* ================= render ================= */
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}
    >
      {/* ---------- wrapper ---------- */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* logo */}
          <Link to="/">
            <img src={logo2} alt="Logo" className="h-15" />
          </Link>

          {/* ---------- desktop nav ---------- */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, idx) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(idx)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center font-medium transition-colors ${isTopActive(item) ? ACTIVE_COLOR : 'text-black'
                    }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* dropdown */}
                {item.dropdown && (
                  <div
                    className={`absolute left-0 mt-2 w-56 rounded-lg border bg-white py-2 shadow-xl transition-all duration-200 ${activeDropdown === idx
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible translate-y-2'
                      }`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className={`block px-4 py-2 text-sm transition ${isSubActive(sub.href)
                          ? `${ACTIVE_COLOR} font-semibold`
                          : 'text-gray-800 hover:bg-gray-100'
                          }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ---------- mobile hamburger ---------- */}
          <button
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            className="p-2 lg:hidden"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* ---------- overlay for sidebar ---------- */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* ---------- mobile sidebar ---------- */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 transform bg-white transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <img src={logo2} alt="Logo" className="h-10" />
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <FiX className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col space-y-2 p-4">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                to={item.href}
                className={`block font-semibold ${isTopActive(item) ? ACTIVE_COLOR : 'text-gray-800'
                  }`}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="mt-1 space-y-1 pl-4">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.href}
                      className={`block text-sm ${isSubActive(sub.href)
                        ? `${ACTIVE_COLOR} font-medium`
                        : 'text-gray-600 hover:text-black'
                        }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </header>
  );
};

export default Header;

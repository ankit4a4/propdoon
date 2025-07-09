import { useState, useEffect } from 'react';
import logo2 from "../assets/logo2.webp";
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      dropdown: [
        { name: 'Vision & Mission', href: '/about/vision' },
        { name: 'Company Overview', href: '/about/overview' },
      ]
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Construction', href: '/services/construction' },
        { name: 'Architecture', href: '/services/architecture' },
        { name: 'Interior Designing', href: '/services/interior' },
        { name: 'Vastushastra', href: '/services/vastu' }
      ]
    },
    {
      name: 'Properties',
      href: '/properties',
      dropdown: [
        { name: 'ROI Property', href: '/properties/roi' },
        { name: 'Residential Property', href: '/properties/residential' },
        { name: 'Commercial Property', href: '/properties/commercial' },
        { name: 'Construction Updates', href: '/properties/updates' }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img className="h-10" src={logo2} alt="Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <div className="flex items-center cursor-default">
                  <span className={`font-medium transition-colors text-black`}>
                    {item.name}
                  </span>
                  {item.dropdown && (
                    <span className="ml-1">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  )}
                </div>

                {item.dropdown && (
                  <div
                    className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 ${activeDropdown === index ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'}`}
                  >
                    {item.dropdown.map((subItem) => (
                      <span
                        key={subItem.name}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-default"
                      >
                        {subItem.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6 text-black" />
            ) : (
              <FiMenu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-[100vh] w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <img src={logo2} alt="Logo" className="h-10" />
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <FiX className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col px-4 py-4 space-y-2">
          {navigation.map((item, index) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div>
                  <button
                    className="w-full text-left font-semibold text-gray-800 flex justify-between items-center"
                    onClick={() => handleDropdownToggle(index)}
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transform transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === index && (
                    <div className="pl-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <span
                          key={subItem.name}
                          className="block text-sm text-gray-600 hover:text-black cursor-default"
                        >
                          {subItem.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <span className="block font-semibold text-gray-800">
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

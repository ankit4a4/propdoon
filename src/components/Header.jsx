import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo1 from "../assets/logo1.webp"
import logo2 from "../assets/logo2.webp"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <Link to="/" className="flex items-center space-x-3">
            <img className='w-30' src={isScrolled ? logo2 : logo1} alt="" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <div className="flex items-center">
                  <Link
                    // to={item.href}
                    to={"/#"}
                    className={`font-medium transition-colors ${location.pathname.startsWith(item.href)
                      ? 'text-yellow-500'
                      : isScrolled
                        ? 'text-gray-800 hover:text-blue-600'
                        : 'text-white hover:text-yellow-300'
                      }`}
                  >
                    {item.name}
                  </Link>

                  {item.dropdown && (
                    <span className="ml-1">
                      <svg className={`w-4 h-4 ${isScrolled ? 'text-gray-800' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <Link
                        key={subItem.name}
                        // to={subItem.href}
                        to={"/#"}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden border-t border-gray-100 py-4 animate-slide-up ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-black'
            }`}>
            {navigation.map((item, index) => (
              <div key={item.name} className="border-b border-gray-50 last:border-b-0">
                {item.dropdown ? (
                  <div>
                    <div
                      className="flex items-center justify-between px-4 py-3 cursor-pointer"
                      onClick={() => handleDropdownToggle(index)}
                    >
                      <Link
                        // to={item.href}
                        to={"/#"}
                        className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                        onClick={(e) => {
                          if (activeDropdown === index) {
                            e.preventDefault();
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                      <svg
                        className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''} ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {activeDropdown === index && (
                      <div className="bg-gray-50 pl-6">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            // to={subItem.href}
                            to={"/#"}
                            className={`block px-4 py-3 text-sm ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-300'} border-l-2 border-gray-200`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    // to={item.href}
                    to={"/#"}
                    className={`block px-4 py-3 font-medium ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-300'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

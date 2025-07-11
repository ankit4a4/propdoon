import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from 'react-icons/hi';
import logo from "../assets/logo1.webp";

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Properties', href: '/properties' },
    { name: 'Blog', href: '/#' },
    { name: 'Contact', href: '/#' },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, name: 'Facebook' },
    { icon: <FaInstagram />, name: 'Instagram' },
    { icon: <FaTwitter />, name: 'Twitter' },
    { icon: <FaLinkedinIn />, name: 'LinkedIn' },
  ];

  return (
    <footer style={{ backgroundColor: '#000', color: '#FFFFFF' }}>
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '4rem 1rem',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Logo" className="w-40 object-contain" />
            </Link>
            <p className="mb-6 max-w-md" style={{ color: '#D1D5DB' }}>
              Building dreams with excellence. We are your trusted partner for
              construction, architecture, and real estate solutions in Dehradun
              and beyond.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = '#64C0ED')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')
                  }
                  aria-label={social.name}
                >
                  <span className="text-white text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="transition-colors"
                    style={{ color: '#D1D5DB' }}
                    onMouseOver={(e) => (e.target.style.color = '#64C0ED')}
                    onMouseOut={(e) => (e.target.style.color = '#D1D5DB')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <HiOutlineLocationMarker
                  className="w-5 h-5 mt-1"
                  style={{ color: '#64C0ED' }}
                />
                <div>
                  <p style={{ color: '#D1D5DB' }}>123 Builder Street</p>
                  <p style={{ color: '#D1D5DB' }}>
                    Dehradun, Uttarakhand 248001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <HiOutlinePhone
                  className="w-5 h-5"
                  style={{ color: '#64C0ED' }}
                />
                <p style={{ color: '#D1D5DB' }}>+91 7900309090</p>
              </div>
              <div className="flex items-center space-x-3">
                <HiOutlineMail
                  className="w-5 h-5"
                  style={{ color: '#64C0ED' }}
                />
                <p style={{ color: '#D1D5DB' }}>info@propdoon.com</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-8 text-center"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '3rem',
            paddingTop: '2rem',
          }}
        >
          <p style={{ color: '#D1D5DB' }}>
            © {new Date().getFullYear()} PropDoon. All rights reserved. Powered by{' '}
            <span style={{ color: '#E62F35' }}>Rank</span>mantra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

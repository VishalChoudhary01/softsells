import { FaTwitter, FaLinkedin, FaFacebook, FaPhone, FaEnvelope, FaMapMarker, FaShieldAlt } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="dark:bg-neutral-800 bg-amber-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-roboto-slab font-semibold text-textLight-primary dark:text-textDark-primary">SoftSells</h3>
            <p className="text-sm md:text-base dark:text-textDark-secondary">
              Turning unused software licenses into valuable assets since 2023
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <FaShieldAlt className="text-primaryLight" />
              <span className="text-xs md:text-sm dark:text-textDark-secondary">SSL Secured Transactions</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-roboto-slab font-semibold text-textLight-primary dark:text-textDark-primary">Quick Links</h4>
            <ul className="space-y-2">
              {['How It Works', 'Pricing', 'About Us', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm md:text-base dark:text-textDark-secondary hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-roboto-slab font-semibold text-textLight-primary dark:text-textDark-primary">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm md:text-base dark:text-textDark-secondary hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-roboto-slab font-semibold text-textLight-primary dark:text-textDark-primary">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-linkLight-hover dark:text-linkDark-hover" />
                <span className="text-sm md:text-base dark:text-textDark-secondary">+1 (555) 9999999</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-linkLight-hover dark:text-linkDark-hover" />
                <span className="text-sm md:text-base dark:text-textDark-secondary">support@softsells.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarker className="text-linkLight-hover dark:text-linkDark-hover" />
                <span className="text-sm md:text-base dark:text-textDark-secondary">Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 md:flex md:items-center md:justify-between">
          <div className="text-center dark:text-textDark-secondary text-textLight-secondary md:text-left text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LicenseFlip. All rights reserved.
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-lightToggleIcon dark:text-DarkToggleIcon transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer hover:text-white">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-lightToggleIcon dark:text-DarkToggleIcon transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer hover:text-white">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-lightToggleIcon dark:text-DarkToggleIcon transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer hover:text-white">
              <FaFacebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
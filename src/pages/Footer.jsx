import logo from "../assets/images/logo.png"; // 🖼 Your Logo
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const Footer = () => {
  return (
  <footer className="bg-[#4b1e1e] text-yellow-100 py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="ShaadiSUTRA Logo" className="h-10 md:h-12" />
          <span className="text-xl font-bold text-yellow-600">ShaadiSUTRA</span>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-wrap gap-6 text-sm font-medium justify-center items-center">
          <a href="/" className="hover:text-yellow-600 flex items-center gap-1 transition">
            <IoHome /> Home
          </a>
          <a href="#templates" className="hover:text-yellow-600 transition">Templates</a>
          <a href="#howitworks" className="hover:text-yellow-600 transition">How it Works</a>
          <a href="#contact" className="hover:text-yellow-600 transition">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-xl text-yellow-600 items-center">
          <a href="https://www.instagram.com/raaaaaj_135/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="https://wa.me/918160110529" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <FaWhatsapp className="hover:text-green-500 transition" />
          </a>
          <a href="mailto:rajmakwana1352006@gmail.com" title="Email">
            <FaEnvelope className="hover:text-blue-500 transition" />
          </a>
          <a href="tel:+918160110529" title="Call Us">
            <FaPhone className="hover:text-emerald-500 transition" />
          </a>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" title="Our Location">
            <FaMapMarkerAlt className="hover:text-red-500 transition" />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-xs text-gray-500 flex justify-center items-center gap-1">
        Crafted with
        <FaHeart className="text-red-500 animate-pulse" />
        for Shaadi Moments • © {new Date().getFullYear()} ShaadiSUTRA
      </div>
    </footer>
  );
};

export default Footer;

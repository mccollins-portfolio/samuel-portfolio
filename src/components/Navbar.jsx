import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpg'; // ✅ Proper import for Vite/React

const Navbar = () => (
  <nav className="flex justify-between items-center p-8 max-w-6xl mx-auto">
    <img src={profileImg} alt="Logo" className="w-10 h-10 rounded-full object-cover" />

    <ul className="flex gap-8">
      <li><Link to="/" className="text-gray-700 font-medium">Home</Link></li>
      <li><Link to="/about" className="text-gray-700 font-medium">About</Link></li>
      <li><Link to="/services" className="text-gray-700 font-medium">Services</Link></li>
      <li><Link to="/contact" className="text-gray-700 font-medium">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;


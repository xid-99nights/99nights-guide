import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/items">Items</Link></li>
        <li><Link to="/entities">Entities</Link></li>
        <li><Link to="/chests">Chests</Link></li>
        <li><Link to="/badges">Badges</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        <li><Link to="/crafting">Crafting</Link></li>
        <li><Link to="/campfire">Campfire</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/lore">Lore</Link></li>
        <li><Link to="/update-log">Update Log</Link></li>
        <li><Link to="/tips-and-tricks">Tips And Tricks</Link></li>
        <li><Link to="/fishing">Fishing</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
import { useState } from 'react';
import SidebarItem from './SidebarItem';
import { HamburgerMenuIcon, HomeIcon, StarIcon, CalendarIcon } from '@radix-ui/react-icons';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div className={`transition-all duration-300 ease-in-out bg-gray-800 text-white ${open ? 'w-64' : 'w-12'}`}>
        <button onClick={() => setOpen(!open)} className="p-3 text-white mb-5">
          <HamburgerMenuIcon className="w-6 h-6" />
        </button>
        <nav className="flex flex-col items-start">
          <SidebarItem to="/" icon={HomeIcon} label="Home" open={open} />
          <SidebarItem to="/favorites" icon={StarIcon} label="Favorite Events" open={open} />
          <SidebarItem to="/events" icon={CalendarIcon} label="Events" open={open} />
        </nav>
      </div>
      <div className="flex-1">{/* Main content goes here */}</div>
    </div>
  );
};

export default Sidebar;

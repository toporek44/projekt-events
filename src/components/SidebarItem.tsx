import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { IconProps } from '@radix-ui/react-icons/dist/types';

interface SidebarItemProps {
  to: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  label: string;
  open: boolean;
}

const SidebarItem = ({ to, icon: Icon, label, open }: SidebarItemProps) => {
  return (
    <NavLink
      to={to}
      className="relative flex items-start w-full px-3 py-2 mb-4 hover:bg-gray-700 overflow-hidden min-h-10 max-h-10"
    >
      <Icon className="min-h-6 min-w-6" />
      <span
        className={classNames('ml-2 overflow-hidden', {
          ' opacity-0 transition-all duration-300 ease-in-out': !open,
        })}
      >
        {label}
      </span>
    </NavLink>
  );
};

export default SidebarItem;

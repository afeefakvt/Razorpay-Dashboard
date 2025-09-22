import React from "react";
import {
  Search,
  Bell,
  User,
  Menu,
  Home,
  CreditCard,
  Banknote,
  Users,
  MoreHorizontal,
} from "lucide-react";
import logo from "../assets/razorpay-icon.png";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const navItems = [
    { icon: Home, label: "Razorpay Home", active: false },
    { icon: CreditCard, label: "Payments", active: true },
    { icon: Banknote, label: "Bankings", active: false, badge: "2" },
    { icon: Users, label: "Payroll", active: false },
    { icon: MoreHorizontal, label: "More", active: false },
  ];

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-6">

      <div className="flex items-center space-x-4 ">

        {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="p-2 rounded-md text-gray-600 hover:bg-gray-100 md:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      
        <img src={logo} alt="Logo" className="h-25 w-25 ml-6" />

        {/* Navigation tabs - hidden on mobile */}
        <nav className="hidden lg:flex items-center space-x-1 ml-25">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`
                flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors relative
                ${
                  item.active
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }
              `}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
              {/* {item.badge && (
                <span className="ml-2 bg-orange-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[18px] h-[18px] flex items-center justify-center">
                  {item.badge}
                </span>
              )} */}
            </a>
          ))}
        </nav>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-3">
        {/* Search */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
        </div>

        {/* Mobile search button */}
        <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100 sm:hidden">
          <Search className="h-5 w-5" />
        </button>

        {/* Notifications */}
        <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User menu */}
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 p-2 rounded-md text-gray-600 hover:bg-gray-100">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <span className="hidden sm:block text-sm font-medium">NA</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

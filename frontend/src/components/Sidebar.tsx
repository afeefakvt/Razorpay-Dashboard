import React from "react";
import {
  Home,
  CreditCard,
  ArrowLeftRight,
  FileText,
  Shield,
  Link,
  Users,
  Gift,
  Code,
  Smartphone,
  Settings,
  HelpCircle,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: "Home", active: true },
    { icon: ArrowLeftRight, label: "Transactions" },
    { icon: FileText, label: "Settlements" },
    { icon: FileText, label: "Reports" },
    { icon: Shield, label: "Risk and Fraud" },
  ];

  const paymentProducts = [
    { icon: Link, label: "Payment Links" },
    { icon: Link, label: "Payment Links" },
    { icon: CreditCard, label: "Payment Pages" },
    { icon: Link, label: "Razorpay.me Link" },
  ];

  const bankingProducts = [{ icon: CreditCard, label: "X Payroll" }];

  const customerProducts = [
    { icon: Users, label: "Customers" },
    { icon: Gift, label: "Offers" },
    { icon: Code, label: "Developers" },
    { icon: Smartphone, label: "Apps & Deals" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`
        fixed left-0 top-0 h-full w-64 bg-gray-50 border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:z-auto
      `}
      >
        {/* <div className="flex items-center h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-semibold text-gray-900">Razorpay</span>
          </div>
        </div> */}

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-3 space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`
                  flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                  ${
                    item.active
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8">
            <div className="px-6 py-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Payment Products
              </h3>
            </div>
            <nav className="px-3 space-y-1">
              {paymentProducts.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </a>
              ))}
              <button className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded-md hover:bg-blue-50 transition-colors w-full text-left">
                <span className="mr-3 text-xs">+12 More</span>
              </button>
            </nav>
          </div>

          <div className="mt-8">
            <div className="px-6 py-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Banking Products
              </h3>
            </div>
            <nav className="px-3 space-y-1">
              {bankingProducts.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8">
            <div className="px-6 py-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Customer Products
              </h3>
            </div>
            <nav className="px-3 space-y-1">
              {customerProducts.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <nav className="px-3 space-y-1">
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <HelpCircle className="mr-3 h-4 w-4" />
                Test Mode
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <Settings className="mr-3 h-4 w-4" />
                Account & Settings
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

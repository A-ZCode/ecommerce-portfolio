import { useState } from 'react';
import { 
  FiHome, FiShoppingBag, FiMenu, FiLogOut, FiShoppingCart 
} from 'react-icons/fi';

export default function Sidebar() {
  const [activeIcon, setActiveIcon] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const topMenuItems = [
    { 
      name: 'Green Bag', 
      icon: <FiShoppingCart className="text-green-500" />,
      id: 'green-bag'
    },
    { 
      name: 'Menu', 
      icon: <FiMenu className="text-black" />,
      id: 'menu',
      noPulseDefault: true,
      onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen)
    },
    { 
      name: 'Home', 
      icon: <FiHome className="text-black" />,
      id: 'home'
    },
    { 
      name: 'Bag', 
      icon: <FiShoppingBag className="text-black" />,
      id: 'black-bag'
    }
  ];

  const handleLogoutClick = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      console.log('Logout initiated!');
      setIsLoggingOut(false);
    }, 1000);
  };

  return (
    <>
      {/* Mobile Menu Button (only shows on small screens) */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FiMenu className="text-xl" />
      </button>

      {/* Sidebar */}
      <aside className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
        fixed md:left-4 top-5 
        h-[calc(100vh-40px)]
        w-64 md:w-16
        bg-white
        shadow-lg
        rounded-2xl
        flex flex-col justify-between
        z-40
        transition-transform duration-300 ease-in-out
      `}>
        {/* Top Icons */}
        <div className="mt-6 space-y-4 md:space-y-8">
          {topMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveIcon(item.id);
                if (item.onClick) item.onClick();
              }}
              className={`w-full flex items-center p-3 rounded-xl transition-all bg-white
                ${item.id === 'green-bag' ? 'text-green-500' : 'text-black'}
                ${activeIcon === item.id ? 
                  'bg-indigo-50 animate-pulse duration-1000' : 
                  item.noPulseDefault ? 'hover:bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              <span className={`text-xl transition-transform
                ${activeIcon === item.id ? 'scale-110 text-indigo-600' : ''}`}
              >
                {item.icon}
              </span>
              <span className="ml-3 md:hidden">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <div className="mb-6">
          <button 
            onClick={handleLogoutClick}
            className={`w-full flex items-center p-3 rounded-xl transition-all bg-white
              ${isLoggingOut ? 
                'bg-red-100 text-red-600 animate-pulse' : 
                'text-red-500 hover:text-white hover:bg-red-500'}`}
          >
            <FiLogOut className="text-xl" />
            <span className="ml-3 md:hidden">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
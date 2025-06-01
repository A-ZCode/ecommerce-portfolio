import { useState } from 'react';
import { 
  FiHome, FiShoppingBag, FiMenu, FiLogOut, FiShoppingCart 
} from 'react-icons/fi';

export default function Sidebar() {
  const [activeIcon, setActiveIcon] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

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
      noPulseDefault: true // Only pulses when clicked
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
    }, 1000); // Animation duration
  };

  return (
    <aside className={`
      fixed left-4 top-5 
      h-[calc(100vh-40px)]
      w-16
      bg-white
      shadow-lg
      rounded-2xl
      flex flex-col justify-between
      z-40
    `}>
      {/* Top Icons */}
      <div className="mt-6 space-y-8">
        {topMenuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveIcon(item.id)}
            className={`w-full flex justify-center p-3 rounded-xl transition-all
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
          </button>
        ))}
      </div>

      {/* Logout Button - with Click Animation */}
      <div className="mb-6">
        <button 
          onClick={handleLogoutClick}
          className={`w-full flex justify-center p-3 rounded-xl transition-all
            ${isLoggingOut ? 
              'bg-red-100 text-red-600 animate-pulse' : 
              'text-red-500 hover:text-white hover:bg-red-500'}`}
        >
          <FiLogOut className="text-xl" />
        </button>
      </div>
    </aside>
  );
}
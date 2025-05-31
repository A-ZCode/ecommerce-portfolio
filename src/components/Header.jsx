import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center">
          {/* Search Section */}
          <div className="w-[40%]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search Item
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Apple Watch, Samsung S21, Macbook Pro..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-full 
                  focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                  placeholder-gray-400"
              />
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Logo */}
          <div className="text-xl font-bold text-gray-900">
            {/* Add your logo here */}
          </div>
        </div>
      </div>
    </header>
  );
}

import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (username: string) => void;
  isLoading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading = false }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && !isLoading) {
      onSearch(username.trim());
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      <div className="relative">
        <form onSubmit={handleSubmit} className="flex items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-20 py-3 text-sm bg-white/80 border border-gray-200 rounded-xl shadow-sm backdrop-blur-sm focus:ring-2 focus:ring-tiktok-blue/30 focus:border-tiktok-blue/50 focus:outline-none transition-all duration-200"
              placeholder="Enter TikTok username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <div className="h-5 flex items-center">
                {username && (
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600 focus:outline-none transition-colors duration-200"
                    onClick={() => setUsername('')}
                    disabled={isLoading}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={!username.trim() || isLoading}
            className={`ml-2 px-5 py-3 rounded-xl font-medium text-white transition-all duration-200 shadow-sm ${
              !username.trim() || isLoading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-tiktok-blue to-tiktok-pink hover:shadow-md hover:opacity-90'
            }`}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>
      <p className="mt-2 text-xs text-center text-gray-500">
        Example: adilet.sw, khaby.lame, charlidamelio
      </p>
    </div>
  );
};

export default SearchBar;

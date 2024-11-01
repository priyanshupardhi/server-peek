import { UserAvatar } from '@/pages/Avatar';
import { Bell, MessageCircle, HelpCircle } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-5 px-5">
      <div className="flex justify-between items-center">
        {/* Branding and navigation */}
        <div className="flex items-center space-x-4 md:space-x-9">
          <h1 className="text-lg md:text-xl font-bold">ServerPeek</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 md:space-x-6">
              <li><a href="/dashboard/home/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/dashboard/stats/" className="hover:text-gray-300">Stats</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
            </ul>
          </nav>
        </div>
        {/* User actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 md:px-3 rounded text-xs md:text-sm">
            New
          </button>
          <Bell className="h-4 w-4 md:h-5 md:w-5 text-gray-300 hover:text-white cursor-pointer" />
          <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-gray-300 hover:text-white cursor-pointer" />
          <HelpCircle className="h-4 w-4 md:h-5 md:w-5 text-gray-300 hover:text-white cursor-pointer" />
          <UserAvatar />
        </div>
      </div>
      {/* Mobile navigation */}
      <nav className="block md:hidden mt-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="/dashboard/home/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/dashboard/stats/" className="hover:text-gray-300">Stats</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
        </ul>
      </nav>
    </header>
  );
}

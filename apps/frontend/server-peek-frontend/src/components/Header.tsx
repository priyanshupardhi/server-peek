import Avatar from '@/pages/Avatar';
import { Bell, MessageCircle, HelpCircle } from 'lucide-react';

type Props = {prop:string}

export const Header = (props: Props) => {
  return (
    <header className="bg-gray-900 text-white px-5">
          <div className="flex justify-between items-center">
            <div className="flex mt-2 items-center space-x-9">
              <h1 className="text-xl font-bold">ServerPeek</h1>
              <nav>
                <ul className="flex space-x-6">
                  <li><a href="#" className="hover:text-gray-300">Dashboard</a></li>
                  <li><a href="#" className="hover:text-gray-300">Incidents</a></li>
                  <li><a href="#" className="hover:text-gray-300">Services</a></li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded text-sm">
                {props.prop}
              </button>
              <Bell className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <MessageCircle className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <HelpCircle className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <Avatar></Avatar>
            </div>
          </div>
        </header>
  )
}
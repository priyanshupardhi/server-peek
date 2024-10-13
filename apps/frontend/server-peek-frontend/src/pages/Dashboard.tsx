import { Bell, MessageCircle, HelpCircle } from 'lucide-react';

const Dashboard = () => {
    return (
      <>
        <header className="bg-gray-900 text-white p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
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
                New
              </button>
              <Bell className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <MessageCircle className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <HelpCircle className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <img className="h-8 w-8 rounded-full" src="src/assets/monkey.jpg" alt="User avatar" />
            </div>
          </div>
        </header>
  
        <main className="bg-gray-900 text-white p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-1">Martix</h2>
            </div>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm">
              Connect
            </button>
          </div>
  
          <nav className="mb-8">
            <ul className="flex space-x-6 border-b border-gray-800">
              {['Events', 'Logs', 'Disks', 'Environment', 'Shell', "PR's", 'Jobs', 'Metrics', 'Scaling', 'Settings'].map((item) => (
                <li key={item}>
                  <a href="#" className={`pb-2 px-1 inline-block ${item === 'Metrics' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-400 hover:text-white'}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
  
          <section>
            <h3 className="text-xl font-bold mb-4">CPU</h3>
            <div className="grid grid-cols-3 gap-4">
              {[5, 7, 9].map((hour) => (
                <div key={hour} className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="bg-gray-700 p-2">
                    <h4 className="text-sm font-medium">{hour} AM</h4>
                  </div>
                  <div className="h-32 bg-gray-800"></div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </>
    );
  };
  
  export default Dashboard;
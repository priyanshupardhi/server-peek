
const HomePage = () => {
    return (
      <>
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
      </>
    );
  };
  
  export default HomePage;
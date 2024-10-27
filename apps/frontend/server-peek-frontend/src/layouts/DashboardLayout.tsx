import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
      <>
        <Header prop="priyanshu"></Header>
  
        <main className="bg-gray-900 text-white p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-1">Martix</h2>
            </div>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm">
              Connect
            </button>
          </div>
  
          <Outlet/>
        </main>
      </>
    );
  };
  
  export default Dashboard;
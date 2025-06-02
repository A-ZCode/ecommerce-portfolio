import { Outlet } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BagPanel from "./components/BagPanel";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-200 w-full">
      <Header />
      <div className="relative w-full flex flex-col lg:flex-row">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content with border */}
        <main className="lg:ml-20 lg:mr-80 px-4 lg:px-6 flex-1 overflow-x-hidden border-r-4 border-black">
          <Outlet />
        </main>
        
        {/* Bag Panel */}
        <div className="lg:fixed lg:right-0 lg:top-20 lg:h-[calc(100vh-80px)] w-full lg:w-80 bg-gray-200 border-t lg:border-t-0 border-gray-300">
          <BagPanel />
        </div>
      </div>
    </div>
  );
}
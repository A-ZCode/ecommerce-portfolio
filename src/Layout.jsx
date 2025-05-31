import { Outlet } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BagPanel from "./components/BagPanel";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-200 w-full">
      <Header />
      <div className="relative w-full flex">
        {/* Sidebar - Positioned absolutely on left */}
        <Sidebar />
        
        {/* Main Content - Now with protective right border */}
        <main className="ml-20 mr-[40px]   pl-4 pr-2 flex-1 border-r-4 border-black overflow-x-hidden">
          <Outlet />
        </main>
        
        {/* Bag Panel - With left margin for breathing room */}
        <div className=" h-full ml-2">
          <BagPanel />
        </div>
      </div>
    </div>
  );
}
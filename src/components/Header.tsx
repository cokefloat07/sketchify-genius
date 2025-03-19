
import React from 'react';
import { cn } from '@/lib/utils';
import { BrainCircuit, Settings } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(
      "w-full h-16 px-6 flex items-center justify-between bg-white bg-opacity-80 backdrop-blur-md z-10 border-b border-gray-100",
      className
    )}>
      <div className="flex items-center space-x-2">
        <BrainCircuit className="w-6 h-6 text-blue-500" />
        <h1 className="text-xl font-medium tracking-tight">Diagram.AI</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;

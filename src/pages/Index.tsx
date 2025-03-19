
import { useState } from 'react';
import Header from '@/components/Header';
import DiagramGenerator from '@/components/DiagramGenerator';
import { ChevronDown, Command, GitMerge, Sparkles } from 'lucide-react';

const Index = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-blue-500 uppercase bg-blue-50 rounded-full">
            Powered by AI
          </div>
          <h1 className="text-4xl font-semibold tracking-tight mb-4">
            Visualize Your Ideas Instantly
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your thoughts into stunning diagrams with our AI-powered diagram generator. 
            Create flowcharts, ER diagrams, and network maps effortlessly.
          </p>
        </section>
        
        <div className="grid gap-8 mb-12">
          <DiagramGenerator />
        </div>
        
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Explore Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI Diagram Generator comes with powerful features to help you create professional diagrams in seconds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <Command className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Simple Interface</h3>
              <p className="text-gray-600">
                Just describe what you need, and our AI will create the perfect diagram for you - no complex tools required.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                <GitMerge className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Multiple Diagram Types</h3>
              <p className="text-gray-600">
                Create flowcharts, ER diagrams, network diagrams, and more - all from a single interface.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">AI-Powered</h3>
              <p className="text-gray-600">
                Our advanced AI understands your requirements and creates visually appealing diagrams with perfect layout.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mt-16 bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="p-8">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4 mt-6">
              <div className="border-b border-gray-100 pb-4">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                >
                  <span className="text-lg font-medium">How does the AI diagram generator work?</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`} />
                </button>
                {isExpanded && (
                  <div className="mt-2 text-gray-600">
                    Our AI diagram generator uses advanced natural language processing to understand your requirements and convert them into structured diagram elements. It analyzes your text prompt, identifies entities and relationships, and arranges them in a visually appealing layout.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Diagram.AI • All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

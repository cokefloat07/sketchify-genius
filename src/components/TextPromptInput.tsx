
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Send, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TextPromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
  className?: string;
}

const TextPromptInput: React.FC<TextPromptInputProps> = ({
  onSubmit,
  isLoading,
  className
}) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt.trim());
    }
  };

  const examplePrompts = [
    "Create a flowchart for user authentication process",
    "Generate an ER diagram for an e-commerce database",
    "Design a network diagram for a small office setup"
  ];

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium text-gray-500">Describe your diagram</div>
        {prompt && (
          <button 
            onClick={() => setPrompt('')} 
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what diagram you want to generate..."
            className="w-full h-32 px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors resize-none"
          />
          <Sparkles className="absolute right-3 top-3 h-5 w-5 text-gray-300" />
        </div>
        
        {!prompt && (
          <div className="flex flex-wrap gap-2">
            {examplePrompts.map((example, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleExampleClick(example)}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
        )}
        
        <Button 
          type="submit" 
          disabled={!prompt.trim() || isLoading}
          className="w-full flex items-center justify-center space-x-2 py-6"
        >
          {isLoading ? (
            <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
          ) : (
            <>
              <span>Generate Diagram</span>
              <Send className="h-4 w-4 ml-2" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default TextPromptInput;

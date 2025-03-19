
import React from 'react';
import { cn } from '@/lib/utils';
import { Network, GitBranch, Database } from 'lucide-react';

export type DiagramType = 'flowchart' | 'er-diagram' | 'network';

interface DiagramTypeSelectorProps {
  selectedType: DiagramType;
  onChange: (type: DiagramType) => void;
  className?: string;
}

const DiagramTypeSelector: React.FC<DiagramTypeSelectorProps> = ({
  selectedType,
  onChange,
  className
}) => {
  const diagramTypes = [
    { id: 'flowchart', label: 'Flowchart', icon: GitBranch },
    { id: 'er-diagram', label: 'ER Diagram', icon: Database },
    { id: 'network', label: 'Network', icon: Network }
  ] as const;

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      <div className="text-sm font-medium text-gray-500">Diagram Type</div>
      <div className="grid grid-cols-3 gap-3">
        {diagramTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.id;
          
          return (
            <button
              key={type.id}
              onClick={() => onChange(type.id)}
              className={cn(
                "flex flex-col items-center justify-center py-3 px-2 rounded-lg transition-all duration-200 border",
                isSelected 
                  ? "border-blue-200 bg-blue-50 text-blue-600" 
                  : "border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800"
              )}
            >
              <Icon 
                className={cn(
                  "w-5 h-5 mb-2",
                  isSelected ? "text-blue-500" : "text-gray-500"
                )} 
              />
              <span className="text-xs font-medium">{type.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DiagramTypeSelector;

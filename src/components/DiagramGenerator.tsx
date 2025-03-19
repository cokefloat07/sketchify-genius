
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import DiagramTypeSelector, { DiagramType } from './DiagramTypeSelector';
import TextPromptInput from './TextPromptInput';
import DiagramCanvas from './DiagramCanvas';
import { generateDiagram } from '@/utils/diagramUtils';
import { toast } from 'sonner';
import { Node, Edge } from '@xyflow/react';

interface DiagramGeneratorProps {
  className?: string;
}

const DiagramGenerator: React.FC<DiagramGeneratorProps> = ({ className }) => {
  const [diagramType, setDiagramType] = useState<DiagramType>('flowchart');
  const [isLoading, setIsLoading] = useState(false);
  const [diagramData, setDiagramData] = useState<{ nodes: Node[]; edges: Edge[] } | null>(null);

  const handleDiagramTypeChange = (type: DiagramType) => {
    setDiagramType(type);
    setDiagramData(null);
  };

  const handlePromptSubmit = async (prompt: string) => {
    setIsLoading(true);
    
    try {
      const data = await generateDiagram(prompt, diagramType);
      setDiagramData(data);
      toast.success('Diagram generated successfully');
    } catch (error) {
      console.error('Error generating diagram:', error);
      toast.error('Failed to generate diagram. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("bg-white rounded-xl p-6 shadow-sm", className)}>
      <div className="mb-6">
        <h2 className="text-2xl font-medium text-gray-800 mb-2">AI Diagram Generator</h2>
        <p className="text-gray-500">Create professional diagrams from text descriptions</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <DiagramTypeSelector
            selectedType={diagramType}
            onChange={handleDiagramTypeChange}
          />
          
          <TextPromptInput
            onSubmit={handlePromptSubmit}
            isLoading={isLoading}
          />
        </div>
        
        <div className="lg:col-span-2">
          <DiagramCanvas
            diagramType={diagramType}
            diagramData={diagramData}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default DiagramGenerator;

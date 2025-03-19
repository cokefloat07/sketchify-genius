
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Download, Maximize, ZoomIn, ZoomOut } from 'lucide-react';
import { Toast } from '@/components/ui/toast';
import { toast } from 'sonner';
import { DiagramType } from './DiagramTypeSelector';

// Import necessary libraries - using xyflow for diagram rendering
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Node,
  Edge
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

interface DiagramCanvasProps {
  diagramType: DiagramType;
  diagramData: { nodes: Node[]; edges: Edge[] } | null;
  isLoading: boolean;
  className?: string;
}

const DiagramCanvas: React.FC<DiagramCanvasProps> = ({
  diagramType,
  diagramData,
  isLoading,
  className
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (diagramData) {
      setNodes(diagramData.nodes);
      setEdges(diagramData.edges);
    }
  }, [diagramData, setNodes, setEdges]);

  const handleDownload = () => {
    if (!canvasRef.current || !diagramData) {
      return;
    }

    // This is a simplified version. In a real implementation,
    // you would use html-to-image or a similar library
    toast.success('Diagram downloaded successfully');
  };

  const toggleFullscreen = () => {
    if (!canvasRef.current) return;
    
    if (!isFullscreen) {
      if (canvasRef.current.requestFullscreen) {
        canvasRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div 
      ref={canvasRef}
      className={cn(
        "relative w-full rounded-xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 diagram-canvas",
        isFullscreen ? "fixed inset-0 z-50" : "h-[500px]",
        className
      )}
    >
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin mb-4"></div>
            <p className="text-gray-500 animate-pulse">Generating your diagram...</p>
          </div>
        </div>
      ) : !diagramData ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50">
          <div className="text-center p-8 max-w-md">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              {diagramType === 'flowchart' && <GitBranch className="h-8 w-8 text-gray-400" />}
              {diagramType === 'er-diagram' && <Database className="h-8 w-8 text-gray-400" />}
              {diagramType === 'network' && <Network className="h-8 w-8 text-gray-400" />}
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">No diagram yet</h3>
            <p className="text-gray-500 text-sm mb-4">
              Describe what you want to visualize and click "Generate Diagram" to create your {' '}
              {diagramType === 'flowchart' && 'flowchart'}
              {diagramType === 'er-diagram' && 'entity relationship diagram'}
              {diagramType === 'network' && 'network diagram'}
            </p>
          </div>
        </div>
      ) : (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          attributionPosition="bottom-right"
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      )}

      {!isLoading && diagramData && (
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={handleDownload}
            className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-blue-500 transition-colors"
            title="Download diagram"
          >
            <Download className="h-5 w-5" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-blue-500 transition-colors"
            title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            <Maximize className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

// Import the missing icons used in the component
import { GitBranch, Database, Network } from 'lucide-react';

export default DiagramCanvas;

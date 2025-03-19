
import { DiagramType } from '@/components/DiagramTypeSelector';
import { Node, Edge } from '@xyflow/react';

// Sample diagram data generators for demonstration
// In a real implementation, these would connect to an AI service

export async function generateDiagram(
  prompt: string,
  diagramType: DiagramType
): Promise<{ nodes: Node[]; edges: Edge[] }> {
  // Simulate API call with a delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Return sample data based on diagram type
  switch (diagramType) {
    case 'flowchart':
      return generateFlowchartSample();
    case 'er-diagram':
      return generateERDiagramSample();
    case 'network':
      return generateNetworkDiagramSample();
    default:
      return { nodes: [], edges: [] };
  }
}

function generateFlowchartSample(): { nodes: Node[]; edges: Edge[] } {
  return {
    nodes: [
      {
        id: 'start',
        type: 'input',
        data: { label: 'Start' },
        position: { x: 100, y: 0 },
        style: { 
          background: '#f0f9ff', 
          border: '1px solid #bae6fd',
          borderRadius: '30px',
          padding: '10px',
          width: 120,
          textAlign: 'center',
        },
      },
      {
        id: 'process1',
        data: { label: 'User Input' },
        position: { x: 100, y: 100 },
        style: { 
          background: '#f0f9ff', 
          border: '1px solid #bae6fd',
          borderRadius: '8px',
          padding: '10px',
          width: 150,
          textAlign: 'center',
        },
      },
      {
        id: 'decision',
        data: { label: 'Validate Data' },
        position: { x: 100, y: 200 },
        style: { 
          background: '#fffbeb', 
          border: '1px solid #fef3c7',
          borderRadius: '8px',
          padding: '10px',
          width: 150,
          textAlign: 'center',
        },
      },
      {
        id: 'process2',
        data: { label: 'Process Request' },
        position: { x: 100, y: 300 },
        style: { 
          background: '#f0f9ff', 
          border: '1px solid #bae6fd',
          borderRadius: '8px',
          padding: '10px',
          width: 150,
          textAlign: 'center',
        },
      },
      {
        id: 'end',
        type: 'output',
        data: { label: 'End' },
        position: { x: 100, y: 400 },
        style: { 
          background: '#f0fdf4', 
          border: '1px solid #bbf7d0',
          borderRadius: '30px',
          padding: '10px',
          width: 120,
          textAlign: 'center',
        },
      },
      {
        id: 'error',
        data: { label: 'Error Handling' },
        position: { x: 300, y: 200 },
        style: { 
          background: '#fef2f2', 
          border: '1px solid #fecaca',
          borderRadius: '8px',
          padding: '10px',
          width: 150,
          textAlign: 'center',
        },
      },
    ],
    edges: [
      { id: 'e1-2', source: 'start', target: 'process1', animated: true },
      { id: 'e2-3', source: 'process1', target: 'decision' },
      { id: 'e3-4', source: 'decision', target: 'process2', label: 'Valid' },
      { id: 'e3-5', source: 'decision', target: 'error', label: 'Invalid' },
      { id: 'e4-5', source: 'process2', target: 'end' },
      { id: 'e5-2', source: 'error', target: 'process1', type: 'step', style: { stroke: '#f87171' } },
    ],
  };
}

function generateERDiagramSample(): { nodes: Node[]; edges: Edge[] } {
  return {
    nodes: [
      {
        id: 'user',
        data: { label: 'User' },
        position: { x: 100, y: 100 },
        style: { 
          background: '#f0f9ff', 
          border: '1px solid #bae6fd',
          borderRadius: '8px',
          padding: '10px',
          width: 150,
          textAlign: 'center',
        },
      },
      {
        id: 'user_attr1',
        data: { label: 'id (PK)' },
        position: { x: 0, y: 200 },
        style: { 
          background: '#f8fafc', 
          border: '1px solid #e2e8f0',
          borderRadius: '4px',
          padding: '8px',
          width: 120,
          textAlign: 'center',
          fontSize: '12px',
        },
      },
      {
        id: 'user_attr2',
        data: { label: 'email' },
        position: { x: 140, y: 200 },
        style: { 
          background: '#f8fafc', 
          border: '1px solid #e2e8f0',
          borderRadius: '4px',
          padding: '8px',
          width: 120,
          textAlign: 'center',
          fontSize: '12px',
        },
      },
      {
        id: 'user_attr3',
        data: { label: 'name' },
        position: { x: 280, y: 200 },
        style: { 
          background: '#f8fafc', 
          border: '1px solid #e2e8f0',
          borderRadius: '4px',
          padding: '8px',
          width: 120,
          textAlign: 'center',
          fontSize: '12px',
        },
      },
      {
        id: 'order',
        data: { label: 'Order' },
        position: { x: 450, y: 100 },
        style: { 
          background: '#f0fdf4', 
          border: '1px solid #bbf7d0',
          borderRadius: '8px',
          padding: '10px',
          width: 150,
          textAlign: 'center',
        },
      },
      {
        id: 'order_attr1',
        data: { label: 'id (PK)' },
        position: { x: 400, y: 200 },
        style: { 
          background: '#f8fafc', 
          border: '1px solid #e2e8f0',
          borderRadius: '4px',
          padding: '8px',
          width: 120,
          textAlign: 'center',
          fontSize: '12px',
        },
      },
      {
        id: 'order_attr2',
        data: { label: 'user_id (FK)' },
        position: { x: 540, y: 200 },
        style: { 
          background: '#f8fafc', 
          border: '1px solid #e2e8f0',
          borderRadius: '4px',
          padding: '8px',
          width: 120,
          textAlign: 'center',
          fontSize: '12px',
        },
      },
    ],
    edges: [
      { id: 'e1-2', source: 'user', target: 'user_attr1' },
      { id: 'e1-3', source: 'user', target: 'user_attr2' },
      { id: 'e1-4', source: 'user', target: 'user_attr3' },
      { id: 'e5-6', source: 'order', target: 'order_attr1' },
      { id: 'e5-7', source: 'order', target: 'order_attr2' },
      { 
        id: 'e1-5', 
        source: 'user', 
        target: 'order', 
        label: '1:N',
        type: 'straight',
        style: { stroke: '#64748b', strokeWidth: 2 } 
      },
    ],
  };
}

function generateNetworkDiagramSample(): { nodes: Node[]; edges: Edge[] } {
  return {
    nodes: [
      {
        id: 'router',
        data: { label: 'Router' },
        position: { x: 250, y: 50 },
        style: { 
          background: '#f0f9ff', 
          border: '1px solid #bae6fd',
          borderRadius: '8px',
          padding: '10px',
          width: 120,
          textAlign: 'center',
        },
      },
      {
        id: 'switch1',
        data: { label: 'Switch 1' },
        position: { x: 100, y: 150 },
        style: { 
          background: '#f0fdfa', 
          border: '1px solid #99f6e4',
          borderRadius: '8px',
          padding: '10px',
          width: 120,
          textAlign: 'center',
        },
      },
      {
        id: 'switch2',
        data: { label: 'Switch 2' },
        position: { x: 400, y: 150 },
        style: { 
          background: '#f0fdfa', 
          border: '1px solid #99f6e4',
          borderRadius: '8px',
          padding: '10px',
          width: 120,
          textAlign: 'center',
        },
      },
      {
        id: 'pc1',
        data: { label: 'PC 1' },
        position: { x: 0, y: 250 },
        style: { 
          background: '#fdf2f8', 
          border: '1px solid #fbcfe8',
          borderRadius: '8px',
          padding: '10px',
          width: 100,
          textAlign: 'center',
        },
      },
      {
        id: 'pc2',
        data: { label: 'PC 2' },
        position: { x: 130, y: 250 },
        style: { 
          background: '#fdf2f8', 
          border: '1px solid #fbcfe8',
          borderRadius: '8px',
          padding: '10px',
          width: 100,
          textAlign: 'center',
        },
      },
      {
        id: 'pc3',
        data: { label: 'PC 3' },
        position: { x: 320, y: 250 },
        style: { 
          background: '#fdf2f8', 
          border: '1px solid #fbcfe8',
          borderRadius: '8px',
          padding: '10px',
          width: 100,
          textAlign: 'center',
        },
      },
      {
        id: 'pc4',
        data: { label: 'PC 4' },
        position: { x: 450, y: 250 },
        style: { 
          background: '#fdf2f8', 
          border: '1px solid #fbcfe8',
          borderRadius: '8px',
          padding: '10px',
          width: 100,
          textAlign: 'center',
        },
      },
      {
        id: 'printer',
        data: { label: 'Printer' },
        position: { x: 250, y: 250 },
        style: { 
          background: '#fffbeb', 
          border: '1px solid #fef3c7',
          borderRadius: '8px',
          padding: '10px',
          width: 100,
          textAlign: 'center',
        },
      },
    ],
    edges: [
      { 
        id: 'e1-2', 
        source: 'router', 
        target: 'switch1', 
        animated: true,
        style: { stroke: '#3b82f6', strokeWidth: 2 } 
      },
      { 
        id: 'e1-3', 
        source: 'router', 
        target: 'switch2', 
        animated: true,
        style: { stroke: '#3b82f6', strokeWidth: 2 } 
      },
      { id: 'e2-4', source: 'switch1', target: 'pc1' },
      { id: 'e2-5', source: 'switch1', target: 'pc2' },
      { id: 'e3-6', source: 'switch2', target: 'pc3' },
      { id: 'e3-7', source: 'switch2', target: 'pc4' },
      { id: 'e2-8', source: 'switch1', target: 'printer' },
      { id: 'e3-8', source: 'switch2', target: 'printer' },
    ],
  };
}

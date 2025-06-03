// src/App.tsx
import React from 'react';
import Button from './components/Button'; // Adjust path if needed
import { PlusCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid'; // Example icons

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Button Examples</h1>

      <div className="flex flex-wrap gap-4 items-center">
        <Button onClick={handleClick}>Primary Button</Button>
        <Button variant="secondary" onClick={handleClick}>Secondary Button</Button>
        <Button variant="ghost" onClick={handleClick}>Ghost Button</Button>
        <Button variant="danger" onClick={handleClick}>Danger Button</Button>
        <Button variant="success" onClick={handleClick}>Success Button</Button>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <Button size="sm" onClick={handleClick}>Small Button</Button>
        <Button size="md" onClick={handleClick}>Medium Button</Button>
        <Button size="lg" onClick={handleClick}>Large Button</Button>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <Button disabled onClick={handleClick}>Disabled Button</Button>
        <Button variant="primary" icon={<PlusCircleIcon className="h-5 w-5" />} onClick={handleClick}>
          Add Item
        </Button>
        <Button variant="danger" icon={<ExclamationCircleIcon className="h-5 w-5" />} onClick={handleClick}>
          Delete
        </Button>
        <Button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3" onClick={handleClick}>
          Custom Styled
        </Button>
      </div>
    </div>
  );
}

export default App;
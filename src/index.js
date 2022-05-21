import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
    { id: "todo-0", name: "Eat", completed: false },
    { id: "todo-1", name: "Sleep", completed: true },
    { id: "todo-2", name: "Repeat", completed: false }
  ];
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App tasks={DATA} />);

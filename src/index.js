import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { nanoid } from 'nanoid';

const DATA = [
    { id: `todo-${nanoid()}`, name: "Eat", completed: true },
    { id: `todo-${nanoid()}`, name: "Sleep", completed: false },
    { id: `todo-${nanoid()}`, name: "Repeat", completed: false }
  ];
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App tasks={DATA} />);

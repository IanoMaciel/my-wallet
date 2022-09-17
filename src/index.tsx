import React from 'react';
import ReactDOM from 'react-dom/client';

//views
import Dashboard from './views/Dashboard';
import List from './views/List';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <Dashboard />
      <List/>
    </>
    
  </React.StrictMode>
);
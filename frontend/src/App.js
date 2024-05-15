// src/App.js
import "./index.css";
import React from 'react';
import TableSearch from './components/TableSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold mb-4" style={{textAlign: "Center"}}>Company Directory</h1>
      </header>
      <main>
      <TableSearch />  
      </main>
      
    </div>
  );
}

export default App;

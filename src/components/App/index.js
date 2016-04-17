import React from 'react';
import { FilterContainer } from '../Filter';
import { TableContainer } from '../Table';

function App() {
  return (
    <div>
      <div className="header">
        <h1>Redux Table</h1>
        <p>Provides you with search, sort and select interactions.</p>
      </div>
      <div className="content">
        <FilterContainer />
        <TableContainer />
      </div>
    </div>
  );
}

export {
  App
};
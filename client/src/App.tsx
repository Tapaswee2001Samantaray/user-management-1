import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AllRouters from './Routers';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <AllRouters />
      </Router>
    </div>
  );
};

export default App;

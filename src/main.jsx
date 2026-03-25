import React from 'react';
import ReactDOM from 'react-dom/client';
import Aurora from './Aurora';
import Navbar from './Navbar';
import './Aurora.css';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Aurora
        colorStops={["#fff567","#f10404","#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />
      <Navbar />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap AuthProvider */}
      <BrowserRouter> {/* Wrap BrowserRouter */}
        <App /> {/* Main App Component */}
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
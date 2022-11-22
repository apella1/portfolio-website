import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Blog } from './pages';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
    );
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='blog' element={<Blog />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

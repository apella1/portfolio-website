import React from 'react';
import './App.css';

import { Footer, Header} from './components';
import { Projects, Technologies } from './pages';

function App() {
  return (
      <div className="App">
        <Header />
        <Technologies />
        <Projects />
        <Footer />
      </div>
  )
}

export default App


import React from 'react';
import './App.css';

import { Contact, Footer, Header} from './components';
import { Projects, Technologies } from './pages';

function App() {
  return (
      <div className="App bg-stone-900">
        <Header />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>
  )
}

export default App;
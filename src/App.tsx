import React from 'react';
import './App.css';

import { Contact, FamiliarTech, FeaturedProject, Footer, Header} from './components';
import { Projects, Technologies } from './pages';

function App() {
  return (
      <div className="App">
        <Header />
        <FeaturedProject />
        <Technologies />
        <FamiliarTech />
        <Projects />
        <Contact />
        <Footer />
      </div>
  )
}

export default App


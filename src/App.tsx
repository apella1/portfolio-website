import React from 'react';
import './App.css';

import { Contact, FeaturedProject, Footer, Header} from './components';
import { Projects, Technologies } from './pages';

function App() {
  return (
      <div className="App">
        <Header />
        <FeaturedProject />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>
  )
}

export default App


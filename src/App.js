import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import BackgroundShading from './components/BackgroundShading';

function App() {
  return (
    <>
      <BackgroundShading />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

import NFTs from './pages/NFTs';
import Tokens from './pages/Tokens';
import Game from './pages/Game';
import Team from './pages/Team';
import Partners from './pages/Partners';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nfts" element={<NFTs />} />
          <Route path="tokens" element={<Tokens />} />
          <Route path="game" element={<Game />} />
          <Route path="team" element={<Team />} />
          <Route path="partners" element={<Partners />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

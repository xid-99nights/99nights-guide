import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Items from './pages/Items';
import Entities from './pages/Entities';
import Chests from './pages/Chests';
import Badges from './pages/Badges';
import Locations from './pages/Locations';
import Crafting from './pages/Crafting';
import Campfire from './pages/Campfire';
import Classes from './pages/Classes';
import Lore from './pages/Lore';
import UpdateLog from './pages/UpdateLog';
import TipsAndTricks from './pages/TipsAndTricks';
import Fishing from './pages/Fishing';
import { SpeedInsights } from "@vercel/speed-insights/next"
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/entities" element={<Entities />} />
            <Route path="/chests" element={<Chests />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/crafting" element={<Crafting />} />
            <Route path="/campfire" element={<Campfire />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/lore" element={<Lore />} />
            <Route path="/update-log" element={<UpdateLog />} />
            <Route path="/tips-and-tricks" element={<TipsAndTricks />} />
            <Route path="/fishing" element={<Fishing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
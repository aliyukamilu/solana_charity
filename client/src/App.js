import Home from './pages/Home'

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Swap from './pages/Swap'
import Send from './pages/Send';
import Airdrops from './pages/Airdrops'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ overflowX: 'hidden' }}>
        <Routes>
          <Route path="/airdrops" element={<Airdrops />} />
          <Route path="/send" element={<Send />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

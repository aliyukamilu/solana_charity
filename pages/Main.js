import Home from './dexpages/Home'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './dexpages/Dashboard';
import Swap from './dexpages/Swap'
import Send from './dexpages/Send';
import Airdrops from './dexpages/Airdrops'

function Main() {
  if (typeof window !== "undefined") {

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
  } else {
    return (
      <></>
    )
  }
}

export default Main;

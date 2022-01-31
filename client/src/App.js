import Home from './pages/Home'
import Contract from './pages/Contract';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ overflowX: 'hidden' }}>
        <Routes>
        <Route path="/contract" element={<Contract />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { Navbar, Welcome, Sliders, Services, Transactions } from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
        <Sliders />
    </div>
  );
}

export default App;

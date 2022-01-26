import { Navbar, Welcome, Sliders, About, Token, Roadmap, Footer } from "./components";

function App() {
  return (
    <div className="min-h-screen" style={{ overflowX: 'hidden' }}>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Sliders />
      <About />
      <Token />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;

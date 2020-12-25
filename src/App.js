import "./App.css";

// Components
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from './components/Banner'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Banner/>
    </div>
  );
}

export default App;

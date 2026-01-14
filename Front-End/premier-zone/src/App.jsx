// 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Teams from "./pages/Teams";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </Router>
  );
}

export default App;
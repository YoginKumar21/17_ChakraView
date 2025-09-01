import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Model from "./components/Model";
import Team from "./components/Team";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Model />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { createContext, useState } from 'react';
import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom'
import Popular from "./components/Popular"
import Contact from "./components/Contact"
import About from "./components/About"
import Scores from "./components/Scores"
import Dashboard from "./components/Dashboard"
import Landing from "./components/Landing"
export const ScoreContext = createContext();
function App() {
  const [scores, setScores] = useState([]);
  const addScore = (newScore) => {
    setScores([...scores, newScore]);
  };
  const removeScore = (index) => {
    const newScores = [...scores];
    newScores.splice(index, 1);
    setScores(newScores);
  };
  const scoreContextValue = { scores, addScore,removeScore };
  return (
    <div>
      <Navbar />
      <ScoreContext.Provider value={scoreContextValue}>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Popular" element={<Popular />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />
        <Route path="Scores" element={<Scores />} />
        <Route path="Dashboard" element={<Dashboard />} />
        </Routes>
        </ScoreContext.Provider>
    </div>
    
  )
}

export default App
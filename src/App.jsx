import "./index.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [formvisibility, setFromvisibility] = useState(false);

  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Layout formvisibility={formvisibility} />} />
      </Routes>
    </main>
  );
}

export default App;

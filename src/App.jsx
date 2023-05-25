import "./index.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </main>
  );
}

export default App;

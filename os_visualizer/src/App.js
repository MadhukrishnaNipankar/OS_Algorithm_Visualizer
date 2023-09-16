import "./App.css";
import Chart from "./Pages/Chart";
import LandingPage from "./Pages/LandingPage";
import ListPage from "./Pages/ListPage";
// import LandingPage from "./Pages/LandingPage";
import InputPage from "./Pages/InputPage";

// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/algo" element={<ListPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/charts" element={<Chart />} />
      </Routes>
    </div>
  );
}

export default App;

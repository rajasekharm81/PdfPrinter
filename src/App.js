import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/home";
import Print from "./components/printer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/print" element={<Print />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

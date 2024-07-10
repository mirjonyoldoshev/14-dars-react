import Navbar from "./components/Navbar.jsx/Navbar";
import Main from "./components/Main.jsx/Main";
import Singlepage from "./components/Singlepage/Singlepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/news/:id" element={<Singlepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React,{useEffect,useState} from 'react';
import { Button, Card, CardBody } from "reactstrap";
import { Routes, Route, Link ,Navigate} from "react-router-dom";
import Home from "./component/Home";
import Tgrid from "./component/tgrid";
import T2d from "./component/t2d";
import Game from "./component/game";
import Info from "./component/info";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:3002/api/hello")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);
  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
      {/* Left Nav */}
      <nav
        style={{
          width: "120px",
          backgroundColor: "#f0f4f8",
          padding: "20px",
          boxSizing: "border-box",
          borderRight: "1px solid #ddd",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: "15px" }}>
            <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li style={{ marginBottom: "15px" }}>
            <Link to="/apps" style={{ textDecoration: "none", color: "inherit" }}>
              Apps
            </Link>
          </li>
          <li style={{ marginBottom: "15px" }}>
            <Link to="/Gameing" style={{ textDecoration: "none", color: "inherit" }}>
              Games
            </Link>
          </li>
        </ul>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            bottom: "20px",
            left: "20px",
          }}
        >
          <li style={{ marginBottom: "15px" }}>
            <Link to="/download" style={{ textDecoration: "none", color: "inherit" }}>
              Download
            </Link>
          </li>
          <li style={{ marginBottom: "15px" }}>
            <Link to="/settings" style={{ textDecoration: "none", color: "inherit" }}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main
        style={{
          marginLeft: "120px",
          padding: "20px",
          flex: 1,
          backgroundColor: "#eef5ff",
          minHeight: "100vh",
        }}
      >
      

        {/* Routes */}
        <Routes>
          <Route
            path="/home"
            element={
              <><Navigate to="/home" replace /><>
                <Home />
                <Tgrid />
                <T2d />
                <Game />
                <Info />
              </></>
            }
          />
          <Route path="/tgrid" element={<Tgrid />} />
          <Route path="/t2d" element={<T2d />} />
          <Route path="/game" element={<Game />} />
          <Route path="/info" element={<Info />} />
          <Route path="/download" element={<h2>Download Page</h2>} />
          <Route path="/settings" element={<h2>Settings Page</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

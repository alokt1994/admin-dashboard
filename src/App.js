import "./App.scss";
import Paper from "@mui/material/Paper";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Login from "./Auth/login";
import Pages from "./Pages/Pages";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" replace={true} />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/pages" element={<Pages />}></Route>
      </Routes>
    </div>
  );
}

export default App;

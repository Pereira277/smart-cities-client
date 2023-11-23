import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MyIssues from "./pages/MyIssues";
import NewIssue from "./pages/NewIssue";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-issues" element={<MyIssues />} />
        <Route path="/new-issue" element={<NewIssue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

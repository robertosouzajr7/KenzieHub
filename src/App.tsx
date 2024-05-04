import "./App.css";
import "./style/global.js";
import GlobalStyle from "./style/global";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </div>
  );
}

export default App;

import Login from "./components/Login";
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

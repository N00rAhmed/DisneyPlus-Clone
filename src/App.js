import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from './components/Header';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Login />} />
        </Routes>
        <Routes element={<Home />} />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HompePage from './pages/HompePage';
import POS from './pages/POS';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HompePage />} />
          <Route path="/pos" element={<POS />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

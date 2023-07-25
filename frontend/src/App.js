import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HompePage from './pages/HompePage';
import POS from './pages/POS';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HompePage />} />
          <Route path="/pos" element={<POS />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

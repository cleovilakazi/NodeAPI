import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import HompePage from './pages/HompePage';
import POS from './pages/POS';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={!user ? <HompePage /> : <Navigate to="/pos"/>} />
          <Route path="/pos" element={user ? <POS /> : <Navigate to= "/"/>} />
          <Route path="/login" element={!user ?<Login /> : <Navigate to="/pos"/>} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/pos"/>} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;

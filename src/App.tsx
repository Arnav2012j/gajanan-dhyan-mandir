import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Donate from './pages/Donate';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
}

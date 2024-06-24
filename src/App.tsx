import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesEvents from './pages/FavoritesEvents';
import EventDetailPage from './pages/EventDetailPage';
import './index.css';
import Events from './pages/Events';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex bg-[#212121] h-full min-h-[100vh]">
      <Router>
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="favorites" element={<FavoritesEvents />} />
            <Route path="event/:id" element={<EventDetailPage />} />
            <Route path="events" element={<Events />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

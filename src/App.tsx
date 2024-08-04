import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ChartsPage from './pages/ChartsPage';
import EmailPage from './pages/EmailPage';
import './App.scss';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true);

  const toggleSidebar = (): void => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="app">
        <Header toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Sidebar isVisible={isSidebarVisible} />
          <main className="content">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/charts" element={<ChartsPage />} />
              <Route path="/email" element={<EmailPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

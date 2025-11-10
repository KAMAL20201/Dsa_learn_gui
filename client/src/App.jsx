import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppStore } from './stores/appStore';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import DataStructuresList from './pages/DataStructuresList';
import AlgorithmsList from './pages/AlgorithmsList';
import DataStructureDetail from './pages/DataStructureDetail';
import AlgorithmDetail from './pages/AlgorithmDetail';

function App() {
  const { theme } = useAppStore();

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-structures" element={<DataStructuresList />} />
          <Route path="/data-structures/:id" element={<DataStructureDetail />} />
          <Route path="/algorithms" element={<AlgorithmsList />} />
          <Route path="/algorithms/:id" element={<AlgorithmDetail />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              Built with React, Framer Motion, and Tailwind CSS
            </p>
            <p className="text-gray-400 mt-2">
              Made for engineers learning Data Structures & Algorithms
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

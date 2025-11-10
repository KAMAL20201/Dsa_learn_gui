import { useEffect } from 'react';
import { useAppStore } from './stores/appStore';
import Navbar from './components/layout/Navbar';
import ArrayVisualizer from './components/visualizations/ArrayVisualizer';
import LinkedListVisualizer from './components/visualizations/LinkedListVisualizer';

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn Data Structures & Algorithms Visually
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Interactive visualizations to help you understand DSA concepts better
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#array"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Learning
            </a>
            <a
              href="#features"
              className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Visual Learning?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Interactive
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hands-on learning with real-time visualizations of algorithms and data structures
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Step-by-Step
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Watch algorithms execute step by step with detailed explanations
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Complexity Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Understand time and space complexity with visual comparisons
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visualizations */}
      <section id="array" className="py-16 bg-gray-50 dark:bg-gray-900">
        <ArrayVisualizer />
      </section>

      <section id="linked-list" className="py-16 bg-white dark:bg-gray-800">
        <LinkedListVisualizer />
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            More Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'Binary Trees', icon: '🌳', id: 'trees' },
              { name: 'Graphs', icon: '🕸️', id: 'graphs' },
              { name: 'Hash Tables', icon: '#️⃣', id: 'hash' },
              { name: 'Heaps', icon: '⛰️', id: 'heaps' },
            ].map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Coming Soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
  );
}

export default App;

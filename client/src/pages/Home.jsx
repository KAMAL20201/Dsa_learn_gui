import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, Zap, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Master DSA Visually
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
              Interactive visualizations with code examples in Java, C++, and Python
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Learn data structures and algorithms through intuitive animations and hands-on exploration
            </p>
          </motion.div>

          {/* Main Categories */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
            {/* Data Structures Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Link to="/data-structures">
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Database size={32} className="text-white" />
                    </div>

                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      Data Structures
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Explore arrays, linked lists, trees, graphs, stacks, queues, and more with interactive visualizations
                    </p>

                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                      Explore Data Structures
                      <ArrowRight className="ml-2" size={20} />
                    </div>
                  </div>

                  {/* Preview Icons */}
                  <div className="mt-6 flex gap-3 flex-wrap">
                    {['Array', 'LinkedList', 'Tree', 'Graph', 'Stack', 'Queue'].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Algorithms Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Link to="/algorithms">
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-purple-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-full"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Zap size={32} className="text-white" />
                    </div>

                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      Algorithms
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Master sorting, searching, graph algorithms, dynamic programming, and more with step-by-step animations
                    </p>

                    <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-2 transition-transform">
                      Explore Algorithms
                      <ArrowRight className="ml-2" size={20} />
                    </div>
                  </div>

                  {/* Preview Icons */}
                  <div className="mt-6 flex gap-3 flex-wrap">
                    {['Sorting', 'Searching', 'Graph', 'DP', 'Greedy', 'Backtrack'].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Learn with Visualizations?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                See It In Action
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Watch data structures and algorithms come to life with real-time animations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Multi-Language Code
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get implementation examples in Java, C++, and Python for every topic
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center p-6"
            >
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Interactive Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Manipulate data structures in real-time and understand complexity analysis
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

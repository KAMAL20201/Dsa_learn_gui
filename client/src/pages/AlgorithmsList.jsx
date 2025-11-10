import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, TrendingUp } from 'lucide-react';
import { algorithms } from '../data/dataStructures';

const AlgorithmsList = () => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'hard':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      sorting: '🔄',
      searching: '🔍',
      graph: '🕸️',
      'dynamic-programming': '💎',
      greedy: '🎯',
      backtracking: '↩️',
    };
    return icons[category] || '⚡';
  };

  // Group by category
  const groupedAlgorithms = algorithms.reduce((acc, algo) => {
    if (!acc[algo.category]) {
      acc[algo.category] = [];
    }
    acc[algo.category].push(algo);
    return acc;
  }, {});

  const categoryNames = {
    sorting: 'Sorting Algorithms',
    searching: 'Searching Algorithms',
    graph: 'Graph Algorithms',
    'dynamic-programming': 'Dynamic Programming',
    greedy: 'Greedy Algorithms',
    backtracking: 'Backtracking',
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Algorithms
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Master algorithms with step-by-step visualizations and multi-language code examples
          </p>
        </div>

        {/* Algorithms by Category */}
        {Object.entries(groupedAlgorithms).map(([category, algos]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">{getCategoryIcon(category)}</span>
              {categoryNames[category] || category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {algos.map((algo, index) => (
                <motion.div
                  key={algo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Link to={`/algorithms/${algo.id}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full border-2 border-transparent hover:border-purple-500">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {algo.name}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getDifficultyColor(
                            algo.difficulty
                          )}`}
                        >
                          {algo.difficulty}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                        {algo.description}
                      </p>

                      {/* Time Complexity */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm">
                          <Clock size={16} className="text-purple-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            Time Complexity:
                          </span>
                        </div>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between bg-gray-50 dark:bg-gray-700 rounded px-2 py-1">
                            <span className="text-gray-600 dark:text-gray-400">Best:</span>
                            <span className="font-mono font-semibold text-green-600 dark:text-green-400">
                              {algo.timeComplexity.best}
                            </span>
                          </div>
                          <div className="flex justify-between bg-gray-50 dark:bg-gray-700 rounded px-2 py-1">
                            <span className="text-gray-600 dark:text-gray-400">Average:</span>
                            <span className="font-mono font-semibold text-yellow-600 dark:text-yellow-400">
                              {algo.timeComplexity.average}
                            </span>
                          </div>
                          <div className="flex justify-between bg-gray-50 dark:bg-gray-700 rounded px-2 py-1">
                            <span className="text-gray-600 dark:text-gray-400">Worst:</span>
                            <span className="font-mono font-semibold text-red-600 dark:text-red-400">
                              {algo.timeComplexity.worst}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Space Complexity */}
                      <div className="flex items-center justify-between text-sm bg-blue-50 dark:bg-blue-900/30 rounded px-3 py-2">
                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                          <TrendingUp size={16} className="text-blue-500 mr-2" />
                          <span>Space Complexity:</span>
                        </div>
                        <span className="font-mono font-semibold text-gray-900 dark:text-white">
                          {algo.spaceComplexity}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlgorithmsList;

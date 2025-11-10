import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, TrendingUp } from 'lucide-react';
import { dataStructures } from '../data/dataStructures';

const DataStructuresList = () => {
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
      linear: '📊',
      tree: '🌳',
      graph: '🕸️',
      hashing: '#️⃣',
    };
    return icons[category] || '📦';
  };

  // Group by category
  const groupedDataStructures = dataStructures.reduce((acc, ds) => {
    if (!acc[ds.category]) {
      acc[ds.category] = [];
    }
    acc[ds.category].push(ds);
    return acc;
  }, {});

  const categoryNames = {
    linear: 'Linear Data Structures',
    tree: 'Tree Data Structures',
    graph: 'Graph Data Structures',
    hashing: 'Hashing',
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Data Structures
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore different data structures with interactive visualizations and code examples
          </p>
        </div>

        {/* Data Structures by Category */}
        {Object.entries(groupedDataStructures).map(([category, structures]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">{getCategoryIcon(category)}</span>
              {categoryNames[category] || category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {structures.map((ds, index) => (
                <motion.div
                  key={ds.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Link to={`/data-structures/${ds.id}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full border-2 border-transparent hover:border-blue-500">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {ds.name}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getDifficultyColor(
                            ds.difficulty
                          )}`}
                        >
                          {ds.difficulty}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
                        {ds.description}
                      </p>

                      {/* Time Complexity */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm">
                          <Clock size={16} className="text-blue-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            Time Complexity:
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {Object.entries(ds.timeComplexity)
                            .slice(0, 4)
                            .map(([op, complexity]) => (
                              <div
                                key={op}
                                className="bg-gray-50 dark:bg-gray-700 rounded px-2 py-1"
                              >
                                <span className="text-gray-600 dark:text-gray-400 capitalize">
                                  {op}:
                                </span>
                                <span className="ml-1 font-mono font-semibold text-gray-900 dark:text-white">
                                  {complexity}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Space Complexity */}
                      <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-4">
                        <TrendingUp size={16} className="text-green-500 mr-2" />
                        <span>Space: </span>
                        <span className="ml-1 font-mono font-semibold">
                          {ds.spaceComplexity}
                        </span>
                      </div>

                      {/* Operations */}
                      <div className="flex flex-wrap gap-2">
                        {ds.operations.slice(0, 4).map((op) => (
                          <span
                            key={op}
                            className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs"
                          >
                            {op}
                          </span>
                        ))}
                        {ds.operations.length > 4 && (
                          <span className="px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                            +{ds.operations.length - 4} more
                          </span>
                        )}
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

export default DataStructuresList;

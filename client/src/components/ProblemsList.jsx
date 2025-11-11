import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { getDifficultyColor } from '../data/problems';

const ProblemsList = ({ problems, dataStructureId }) => {
  return (
    <div className="space-y-4">
      {problems.map((problem, index) => {
        return (
          <motion.div
            key={problem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={`/data-structures/${dataStructureId}/problems/${problem.id}`}
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {problem.title}
                      </h3>

                      {/* Difficulty Badge */}
                      <span className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty}
                      </span>

                      {/* Popularity Badge */}
                      {problem.popularity && (
                        <span className="flex items-center gap-1 px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg text-xs font-semibold">
                          <Star size={14} />
                          {problem.popularity}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {problem.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {problem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Approaches Preview */}
                    <div className="flex items-center gap-6 text-sm">
                      {problem.approaches.slice(0, 2).map((approach, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                            <Clock size={14} />
                            <span className="font-mono text-xs">{approach.timeComplexity}</span>
                          </div>
                          <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                            <TrendingUp size={14} />
                            <span className="font-mono text-xs">{approach.spaceComplexity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors">
                      <ArrowRight
                        size={20}
                        className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Bar - Shows if visualizer available */}
              {problem.visualizer && (
                <div className="bg-purple-50 dark:bg-purple-900/20 px-6 py-3 border-t border-purple-200 dark:border-purple-800">
                  <span className="text-sm text-purple-700 dark:text-purple-300 font-medium">
                    ✨ Interactive visualization available
                  </span>
                </div>
              )}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProblemsList;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Clock, TrendingUp, ChevronDown, ChevronUp, Code } from 'lucide-react';
import { getDifficultyColor } from '../data/problems';
import TwoSumVisualizer from './visualizations/TwoSumVisualizer';

const ProblemsList = ({ problems, dataStructureId }) => {
  const [expandedProblem, setExpandedProblem] = useState(null);
  const [showVisualizer, setShowVisualizer] = useState(null);

  const toggleProblem = (problemId) => {
    if (expandedProblem === problemId) {
      setExpandedProblem(null);
      setShowVisualizer(null);
    } else {
      setExpandedProblem(problemId);
      setShowVisualizer(null);
    }
  };

  const handleVisualize = (problemId, e) => {
    e.stopPropagation();
    setShowVisualizer(problemId);
    setExpandedProblem(problemId);
  };

  // Map problem IDs to their visualizer components
  const visualizers = {
    'two-sum': TwoSumVisualizer,
  };

  return (
    <div className="space-y-4">
      {problems.map((problem, index) => {
        const isExpanded = expandedProblem === problem.id;
        const isVisualizing = showVisualizer === problem.id;
        const VisualizerComponent = visualizers[problem.id];

        return (
          <motion.div
            key={problem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Problem Header - Clickable */}
            <div
              onClick={() => toggleProblem(problem.id)}
              className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
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

                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {problem.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {problem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="ml-4">
                  {isExpanded ? (
                    <ChevronUp size={24} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400" />
                  )}
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-700/30">
                    {/* Action Buttons */}
                    <div className="flex gap-3 mb-6">
                      {VisualizerComponent && (
                        <button
                          onClick={(e) => handleVisualize(problem.id, e)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                            isVisualizing
                              ? 'bg-purple-600 text-white'
                              : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50'
                          }`}
                        >
                          <Code size={18} />
                          {isVisualizing ? 'Hide Visualization' : 'Show Visualization'}
                        </button>
                      )}

                      <a
                        href={problem.leetcodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-all"
                      >
                        <ExternalLink size={18} />
                        Solve on LeetCode
                      </a>
                    </div>

                    {/* Visualizer */}
                    {isVisualizing && VisualizerComponent && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                      >
                        <VisualizerComponent />
                      </motion.div>
                    )}

                    {/* Problem Details */}
                    {!isVisualizing && (
                      <>
                        {/* Problem Statement */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Problem Statement
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {problem.problem}
                          </p>

                          {/* Example */}
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                            <div className="font-semibold text-gray-900 dark:text-white mb-2">
                              Example:
                            </div>
                            <div className="font-mono text-sm space-y-1">
                              <div className="text-gray-700 dark:text-gray-300">
                                <span className="text-blue-600 dark:text-blue-400">Input:</span> {problem.example.input}
                              </div>
                              <div className="text-gray-700 dark:text-gray-300">
                                <span className="text-green-600 dark:text-green-400">Output:</span> {problem.example.output}
                              </div>
                              <div className="text-gray-600 dark:text-gray-400 mt-2">
                                <span className="text-purple-600 dark:text-purple-400">Explanation:</span> {problem.example.explanation}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Constraints */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Constraints
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                            {problem.constraints.map((constraint, idx) => (
                              <li key={idx} className="font-mono">{constraint}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Approaches */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Approaches
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {problem.approaches.map((approach, idx) => (
                              <div
                                key={idx}
                                className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                              >
                                <div className="font-semibold text-gray-900 dark:text-white mb-2">
                                  {approach.name}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                  {approach.description}
                                </p>
                                <div className="flex items-center gap-4 text-xs">
                                  <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                                    <Clock size={14} />
                                    <span className="font-mono">{approach.timeComplexity}</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                                    <TrendingUp size={14} />
                                    <span className="font-mono">{approach.spaceComplexity}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProblemsList;

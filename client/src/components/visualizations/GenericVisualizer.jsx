/**
 * Generic Visualizer Factory
 *
 * Creates visualizers dynamically based on configuration.
 * Supports multiple visualizer types (array, tree, graph, etc.)
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
import { getCodeLineMapping } from '../../data/codeExamples';

/**
 * Generic visualizer component that adapts based on problem type
 */
const GenericVisualizer = ({ problemId, visualizationType, generateStepsFn, onStepChange }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [inputData, setInputData] = useState(null);
  const [steps, setSteps] = useState([]);

  const stepData = steps[currentStep];

  // Notify parent component when step changes
  useEffect(() => {
    if (onStepChange && stepData) {
      onStepChange({
        step: currentStep,
        stepData: stepData,
        getHighlightedLines: (language) =>
          getCodeLineMapping(problemId, language, stepData.codeLineType)
      });
    }
  }, [currentStep, stepData, onStepChange, problemId]);

  const handleStart = (data) => {
    setInputData(data);
    const generatedSteps = generateStepsFn(data);
    setSteps(generatedSteps);
    setIsStarted(true);
    setCurrentStep(0);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsStarted(false);
    setSteps([]);
    setInputData(null);
  };

  // Render different visualizer types
  const renderVisualization = () => {
    switch (visualizationType) {
      case 'array-hash-map':
        return renderArrayHashMap();
      case 'array-two-pointer':
        return renderArrayTwoPointer();
      case 'tree-traversal':
        return renderTreeTraversal();
      case 'graph-bfs-dfs':
        return renderGraphSearch();
      default:
        return <div>Unsupported visualization type</div>;
    }
  };

  const renderArrayHashMap = () => {
    if (!stepData || !inputData) return null;

    return (
      <div className="space-y-6">
        {/* Array Visualization */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Array Visualization
          </h4>
          <div className="flex items-start gap-4 flex-wrap justify-center mb-6">
            {inputData.array?.map((num, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: stepData.highlightIndices?.includes(index) ? 1.15 : 1,
                  y: stepData.highlightIndices?.includes(index) ? -10 : 0
                }}
                className="relative"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                  [{index}]
                </div>
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold shadow-lg transition-all
                  ${stepData.highlightIndices?.includes(index) ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-white'}
                `}>
                  {num}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hash Map Visualization */}
        {stepData.hashMap && (
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Hash Map
            </h4>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 min-h-[120px]">
              {Object.keys(stepData.hashMap).length === 0 ? (
                <div className="text-center text-gray-500 italic">Empty</div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {Object.entries(stepData.hashMap).map(([value, index]) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="rounded-lg p-3 border-2 border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    >
                      <div className="text-xs text-gray-600 dark:text-gray-400">Value → Index</div>
                      <div className="font-mono font-bold text-gray-900 dark:text-white">
                        {value} → {index}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step Description */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            {stepData.codeExplanation || stepData.description}
          </p>
        </div>
      </div>
    );
  };

  const renderArrayTwoPointer = () => {
    // Implement two-pointer visualization
    return <div>Two Pointer Visualization (Coming Soon)</div>;
  };

  const renderTreeTraversal = () => {
    // Implement tree visualization
    return <div>Tree Visualization (Coming Soon)</div>;
  };

  const renderGraphSearch = () => {
    // Implement graph visualization
    return <div>Graph Visualization (Coming Soon)</div>;
  };

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      {isStarted && stepData && (
        <div className="bg-gray-100 dark:bg-gray-700 px-6 py-3 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {stepData.description}
            </span>
          </div>
          <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Visualization Area */}
      {isStarted && renderVisualization()}

      {/* Navigation Controls */}
      {isStarted && (
        <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 px-6 py-4 rounded-xl">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-600 text-white hover:bg-gray-700 transition-all"
          >
            <RotateCcw size={20} />
            Reset
          </button>

          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Next
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GenericVisualizer;

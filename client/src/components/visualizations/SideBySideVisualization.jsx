import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

const SideBySideVisualization = ({
  VisualizationComponent,
  codeExamples,
  problemId
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('java');
  const [copied, setCopied] = useState(false);
  const [highlightedLines, setHighlightedLines] = useState([]);
  const [currentStepInfo, setCurrentStepInfo] = useState(null);

  // Handle step changes from the visualizer
  const handleStepChange = (stepInfo) => {
    setCurrentStepInfo(stepInfo);
    if (stepInfo.getHighlightedLines) {
      const lines = stepInfo.getHighlightedLines(selectedLanguage);
      setHighlightedLines(lines);
    }
  };

  // Update highlighted lines when language changes
  useEffect(() => {
    if (currentStepInfo && currentStepInfo.getHighlightedLines) {
      const lines = currentStepInfo.getHighlightedLines(selectedLanguage);
      setHighlightedLines(lines);
    }
  }, [selectedLanguage, currentStepInfo]);

  const languages = [
    { id: 'java', name: 'Java', icon: '☕' },
    { id: 'cpp', name: 'C++', icon: '⚙️' },
    { id: 'python', name: 'Python', icon: '🐍' },
  ];

  // Reset copied state after 2 seconds
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    if (codeExamples[selectedLanguage]) {
      navigator.clipboard.writeText(codeExamples[selectedLanguage]);
      setCopied(true);
    }
  };

  const getCodeLines = () => {
    const code = codeExamples[selectedLanguage] || '';
    return code.split('\n');
  };

  return (
    <div className="space-y-6">
      {/* Language Selector */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Select Programming Language:
            </span>
            <div className="flex space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={`
                    px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                    flex items-center space-x-2
                    ${selectedLanguage === lang.id
                      ? 'bg-blue-600 text-white shadow-md transform scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }
                  `}
                >
                  <span>{lang.icon}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Copy Code</span>
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* Side-by-Side Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Visualization Section - LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Visualization</h3>
          </div>
          <div className="p-6">
            <VisualizationComponent onStepChange={handleStepChange} />
          </div>
        </motion.div>

        {/* Code Section - RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Implementation Code</h3>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto">
              <div className="bg-gray-900 text-gray-100 font-mono text-sm">
                {getCodeLines().map((line, index) => {
                  const isHighlighted = highlightedLines.includes(index);
                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        backgroundColor: isHighlighted
                          ? 'rgba(59, 130, 246, 0.3)' // blue-500 with opacity
                          : 'transparent'
                      }}
                      transition={{ duration: 0.3 }}
                      className={`
                        flex hover:bg-gray-800/50 transition-colors
                        ${isHighlighted ? 'border-l-4 border-blue-500' : ''}
                      `}
                    >
                      <span className="select-none text-gray-500 px-4 py-2 text-right min-w-[3rem] bg-gray-950">
                        {index + 1}
                      </span>
                      <pre className="flex-1 px-4 py-2 overflow-x-auto">
                        <code className={`language-${selectedLanguage}`}>
                          {line || ' '}
                        </code>
                      </pre>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Code Explanation based on highlighted lines */}
          {highlightedLines.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-800 p-4"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">💡</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Currently Executing
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    {highlightedLines.length === 1
                      ? `Line ${highlightedLines[0] + 1} is being executed in the visualization above.`
                      : `Lines ${highlightedLines.map(l => l + 1).join(', ')} are being executed in the visualization above.`
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SideBySideVisualization;

/**
 * Code Examples Registry
 *
 * Centralized registry for all problem code examples.
 * Each problem exports its code and visualization config.
 */

import { twoSumCode, twoSumVisualization } from './twoSum';
// Import more as you add them:
// import { threeSum Code, threeSumVisualization } from './threeSum';
// import { binarySearchCode, binarySearchVisualization } from './binarySearch';

/**
 * Registry mapping problem IDs to their code examples
 */
export const codeRegistry = {
  'two-sum': twoSumCode,
  // 'three-sum': threeSumCode,
  // 'binary-search': binarySearchCode,
  // ... add more problems here
};

/**
 * Registry mapping problem IDs to their visualization configs
 */
export const visualizationRegistry = {
  'two-sum': twoSumVisualization,
  // 'three-sum': threeSumVisualization,
  // 'binary-search': binarySearchVisualization,
  // ... add more problems here
};

/**
 * Get code examples for a problem
 */
export const getCodeExamples = (problemId) => {
  return codeRegistry[problemId] || null;
};

/**
 * Get visualization config for a problem
 */
export const getVisualizationConfig = (problemId) => {
  return visualizationRegistry[problemId] || null;
};

/**
 * Get code line mapping for a specific problem, language, and step type
 */
export const getCodeLineMapping = (problemId, language, stepType) => {
  const codeExample = codeRegistry[problemId];
  if (!codeExample || !codeExample[language]) {
    return [];
  }
  return codeExample[language].lineMap?.[stepType] || [];
};

/**
 * Helper to extract just the code strings (for backward compatibility)
 */
export const getCodeStrings = (problemId) => {
  const codeExamples = getCodeExamples(problemId);
  if (!codeExamples) return null;

  const result = {};
  for (const [lang, data] of Object.entries(codeExamples)) {
    result[lang] = data.code;
  }
  return result;
};

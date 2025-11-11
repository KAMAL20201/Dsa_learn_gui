/**
 * TEMPLATE: Problem Code Examples
 *
 * Copy this file and rename it to your problem name (e.g., threeSum.js)
 * Replace all UPPERCASE placeholders with your actual values
 *
 * Steps to use this template:
 * 1. Copy this file: cp _TEMPLATE.js yourProblem.js
 * 2. Replace PROBLEM_NAME with camelCase name (e.g., twoSum, binarySearch)
 * 3. Replace PROBLEM_ID with kebab-case ID (e.g., two-sum, binary-search)
 * 4. Fill in your code for each language
 * 5. Mark important lines with @step:stepName comments
 * 6. Update lineMap to match your @step comments
 * 7. Define your visualization steps
 * 8. Register in index.js
 */

export const PROBLEM_NAMECode = {
  java: {
    code: `class Solution {
    public RETURN_TYPE FUNCTION_NAME(PARAMETERS) {
        // @step:initialize
        // Initialize your data structures here
        INITIALIZATION_CODE

        // @step:mainLogic
        // Main algorithm logic
        MAIN_LOGIC_CODE

        // @step:return
        // Return result
        return RESULT;
    }
}

// Time Complexity: O(?)
// Space Complexity: O(?)`,
    lineMap: {
      initialize: [2, 3, 4],  // Update these line numbers
      mainLogic: [7, 8, 9],   // to match your code
      return: [12]
    }
  },

  python: {
    code: `class Solution:
    def FUNCTION_NAME(self, PARAMETERS) -> RETURN_TYPE:
        """
        Problem description here

        Args:
            PARAMETER_DESCRIPTION

        Returns:
            RETURN_DESCRIPTION
        """
        # @step:initialize
        # Initialize your data structures here
        INITIALIZATION_CODE

        # @step:mainLogic
        # Main algorithm logic
        MAIN_LOGIC_CODE

        # @step:return
        # Return result
        return RESULT

# Time Complexity: O(?)
# Space Complexity: O(?)`,
    lineMap: {
      initialize: [11, 12, 13],  // Update these line numbers
      mainLogic: [16, 17, 18],   // to match your code
      return: [21]
    }
  },

  cpp: {
    code: `class Solution {
public:
    RETURN_TYPE FUNCTION_NAME(PARAMETERS) {
        // @step:initialize
        // Initialize your data structures here
        INITIALIZATION_CODE

        // @step:mainLogic
        // Main algorithm logic
        MAIN_LOGIC_CODE

        // @step:return
        // Return result
        return RESULT;
    }
};

// Time Complexity: O(?)
// Space Complexity: O(?)`,
    lineMap: {
      initialize: [4, 5, 6],  // Update these line numbers
      mainLogic: [9, 10, 11], // to match your code
      return: [14]
    }
  }
};

/**
 * Visualization configuration
 *
 * Choose a visualization type:
 * - 'array-hash-map': For problems with arrays and hash maps
 * - 'array-two-pointer': For two-pointer technique
 * - 'tree-traversal': For tree problems
 * - 'graph-bfs-dfs': For graph problems
 */
export const PROBLEM_NAMEVisualization = {
  type: 'VISUALIZATION_TYPE', // e.g., 'array-hash-map'

  stepDefinitions: [
    {
      type: 'initialize',
      description: (params) => `YOUR_DESCRIPTION using ${params}`,
      codeLineType: 'initialize'
    },
    {
      type: 'mainLogic',
      description: (params) => `YOUR_DESCRIPTION`,
      codeLineType: 'mainLogic'
    },
    {
      type: 'return',
      description: (result) => `Return ${result}`,
      codeLineType: 'return'
    }
    // Add more step definitions as needed
  ]
};

/**
 * Optional: Step generator function
 *
 * Create this if you need custom step generation logic.
 * Otherwise, the GenericVisualizer will handle it.
 */
export const generatePROBLEM_NAMESteps = (inputData) => {
  const steps = [];
  // Your step generation logic here

  // Example step structure:
  steps.push({
    description: 'Step description',
    array: inputData.array,
    currentIndex: 0,
    highlightIndices: [0],
    hashMap: {},
    codeExplanation: 'What is happening in this step',
    codeLineType: 'initialize' // Must match a step type in visualization config
  });

  // Add more steps...

  return steps;
};

// Remember to:
// 1. Import this in index.js
// 2. Add to codeRegistry with your PROBLEM_ID
// 3. Add to visualizationRegistry with your PROBLEM_ID
// 4. Add problem data to problems.js

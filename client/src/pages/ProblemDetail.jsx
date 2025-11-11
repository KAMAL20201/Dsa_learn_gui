import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, TrendingUp, ExternalLink, Star, Code2, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProblemById, getDifficultyColor } from '../data/problems';
import { dataStructures } from '../data/dataStructures';
import TwoSumVisualizer from '../components/visualizations/TwoSumVisualizer';
import ThreeSumVisualizer from '../components/visualizations/ThreeSumVisualizer';
import CodeTabs from '../components/ui/CodeTabs';
import SideBySideVisualization from '../components/visualizations/SideBySideVisualization';

const ProblemDetail = () => {
  const { dataStructureId, problemId } = useParams();
  const navigate = useNavigate();
  const problem = getProblemById(dataStructureId, problemId);
  const dataStructure = dataStructures.find((ds) => ds.id === dataStructureId);

  // Map problem IDs to their visualizer components
  const visualizers = {
    'two-sum': TwoSumVisualizer,
    'three-sum': ThreeSumVisualizer,
  };

  // Map problem IDs to their code examples
  const codeExamples = {
    'two-sum': {
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Create a HashMap to store value -> index mapping
        Map<Integer, Integer> map = new HashMap<>();

        // Iterate through the array
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            // Check if complement exists in map
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }

            // Store current number and its index
            map.put(nums[i], i);
        }

        // No solution found
        throw new IllegalArgumentException("No two sum solution");
    }
}

// Time Complexity: O(n)
// Space Complexity: O(n)`,
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Create an unordered_map to store value -> index mapping
        unordered_map<int, int> map;

        // Iterate through the array
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];

            // Check if complement exists in map
            if (map.find(complement) != map.end()) {
                return {map[complement], i};
            }

            // Store current number and its index
            map[nums[i]] = i;
        }

        // No solution found
        return {};
    }
};

// Time Complexity: O(n)
// Space Complexity: O(n)`,
      python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """
        Find two numbers that add up to target using hash map

        Args:
            nums: List of integers
            target: Target sum

        Returns:
            List of two indices
        """
        # Create a dictionary to store value -> index mapping
        seen = {}

        # Iterate through the array
        for i, num in enumerate(nums):
            complement = target - num

            # Check if complement exists in dictionary
            if complement in seen:
                return [seen[complement], i]

            # Store current number and its index
            seen[num] = i

        # No solution found
        return []

# Time Complexity: O(n)
# Space Complexity: O(n)`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a Map to store value -> index mapping
    const map = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if complement exists in map
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Store current number and its index
        map.set(nums[i], i);
    }

    // No solution found
    return [];
};

// Time Complexity: O(n)
// Space Complexity: O(n)`
    },
    'three-sum': {
      java: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int left = i + 1;
            int right = nums.length - 1;

            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];

                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));

                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }
}

// Time Complexity: O(n²)
// Space Complexity: O(1) or O(n)`,
      cpp: `class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> result;
        sort(nums.begin(), nums.end());

        for (int i = 0; i < nums.size() - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int left = i + 1;
            int right = nums.size() - 1;

            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];

                if (sum == 0) {
                    result.push_back({nums[i], nums[left], nums[right]});

                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }
};

// Time Complexity: O(n²)
// Space Complexity: O(1) or O(n)`,
      python: `class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        Find all unique triplets that sum to zero

        Args:
            nums: List of integers

        Returns:
            List of triplets that sum to zero
        """
        result = []
        nums.sort()

        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            left = i + 1
            right = len(nums) - 1

            while left < right:
                current_sum = nums[i] + nums[left] + nums[right]

                if current_sum == 0:
                    result.append([nums[i], nums[left], nums[right]])

                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1

                    left += 1
                    right -= 1
                elif current_sum < 0:
                    left += 1
                else:
                    right -= 1

        return result

# Time Complexity: O(n²)
# Space Complexity: O(1) or O(n)`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

// Time Complexity: O(n²)
// Space Complexity: O(1) or O(n)`
    }
  };

  if (!problem || !dataStructure) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Problem Not Found
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-700"
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  const VisualizerComponent = visualizers[problemId];
  const problemCode = codeExamples[problemId];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link
              to="/data-structures"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Data Structures
            </Link>
            <span>/</span>
            <Link
              to={`/data-structures/${dataStructureId}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {dataStructure.name}
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{problem.title}</span>
          </div>

          {/* Back Button */}
          <Link
            to={`/data-structures/${dataStructureId}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to {dataStructure.name}
          </Link>

          {/* Title and Badges */}
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  {problem.title}
                </h1>
                <span className={`px-3 py-1 rounded-lg text-sm font-semibold uppercase ${getDifficultyColor(problem.difficulty)}`}>
                  {problem.difficulty}
                </span>
                {problem.popularity && (
                  <span className="flex items-center gap-1 px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg text-sm font-semibold">
                    <Star size={16} />
                    {problem.popularity}
                  </span>
                )}
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400">{problem.description}</p>
            </div>

            {/* LeetCode Link */}
            <a
              href={problem.leetcodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-md"
            >
              <ExternalLink size={20} />
              Solve on LeetCode
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {problem.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Problem Statement
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {problem.problem}
          </p>

          {/* Example */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 border border-gray-200 dark:border-gray-600 mb-6">
            <div className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
              Example:
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Input:</span> {problem.example.input}
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                <span className="text-green-600 dark:text-green-400 font-semibold">Output:</span> {problem.example.output}
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-3 pt-3 border-t border-gray-300 dark:border-gray-600">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">Explanation:</span> {problem.example.explanation}
              </div>
            </div>
          </div>

          {/* Constraints */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
              Constraints:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm ml-2">
              {problem.constraints.map((constraint, idx) => (
                <li key={idx} className="font-mono">{constraint}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Approaches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="text-yellow-500" size={24} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Solution Approaches
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {problem.approaches.map((approach, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-5 border border-blue-200 dark:border-blue-800"
              >
                <div className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {approach.name}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {approach.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                    <Clock size={16} />
                    <span className="font-mono font-semibold">{approach.timeComplexity}</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <TrendingUp size={16} />
                    <span className="font-mono font-semibold">{approach.spaceComplexity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Visualization with Code Side-by-Side */}
        {VisualizerComponent && problemCode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="text-purple-500" size={28} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Interactive Visualization & Implementation
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Step through the algorithm and see the corresponding code execution highlighted in real-time
            </p>
            <SideBySideVisualization
              VisualizationComponent={VisualizerComponent}
              codeExamples={problemCode}
              problemId={problemId}
            />
          </motion.div>
        )}

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
        >
          <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
            💡 Key Insights
          </h3>
          <ul className="space-y-2 text-green-800 dark:text-green-200">
            <li>• Hash maps provide O(1) lookup time, avoiding nested loops</li>
            <li>• Store complements as you iterate to avoid multiple passes</li>
            <li>• This pattern (using hash map to store seen values) is common in many problems</li>
            <li>• Always consider the space-time tradeoff: we use O(n) space to get O(n) time</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemDetail;

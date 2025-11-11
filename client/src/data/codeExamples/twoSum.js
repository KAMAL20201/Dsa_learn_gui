export const twoSumCode = {
  java: {
    code: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // @step:initialize
        Map<Integer, Integer> map = new HashMap<>();

        // @step:loopStart
        for (int i = 0; i < nums.length; i++) {
            // @step:calculateComplement
            int complement = target - nums[i];

            // @step:checkComplement
            if (map.containsKey(complement)) {
                // @step:found
                return new int[] { map.get(complement), i };
            }

            // @step:addToMap
            map.put(nums[i], i);
        }

        // @step:noSolution
        throw new IllegalArgumentException("No two sum solution");
    }
}`,
    // Auto-generated line mappings from @step comments
    lineMap: {
      initialize: [2],
      loopStart: [5],
      calculateComplement: [7],
      checkComplement: [9],
      found: [10, 11],
      addToMap: [14],
      noSolution: [17]
    }
  },

  python: {
    code: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # @step:initialize
        seen = {}

        # @step:loopStart
        for i, num in enumerate(nums):
            # @step:calculateComplement
            complement = target - num

            # @step:checkComplement
            if complement in seen:
                # @step:found
                return [seen[complement], i]

            # @step:addToMap
            seen[num] = i

        # @step:noSolution
        return []`,
    lineMap: {
      initialize: [2],
      loopStart: [5],
      calculateComplement: [7],
      checkComplement: [9],
      found: [10, 11],
      addToMap: [13],
      noSolution: [15]
    }
  },

  cpp: {
    code: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // @step:initialize
        unordered_map<int, int> map;

        // @step:loopStart
        for (int i = 0; i < nums.size(); i++) {
            // @step:calculateComplement
            int complement = target - nums[i];

            // @step:checkComplement
            if (map.find(complement) != map.end()) {
                // @step:found
                return {map[complement], i};
            }

            // @step:addToMap
            map[nums[i]] = i;
        }

        // @step:noSolution
        return {};
    }
};`,
    lineMap: {
      initialize: [3],
      loopStart: [6],
      calculateComplement: [8],
      checkComplement: [10],
      found: [11, 12],
      addToMap: [15],
      noSolution: [18]
    }
  }
};

// Visualization configuration for this problem
export const twoSumVisualization = {
  type: 'array-hash-map', // Links to generic visualizer
  stepDefinitions: [
    {
      type: 'initialize',
      description: (target) => `Start: We need to find two numbers that add up to ${target}`,
      codeLineType: 'initialize'
    },
    {
      type: 'iterate',
      description: (i, value) => `Checking index ${i}: value = ${value}`,
      codeLineType: 'calculateComplement'
    },
    {
      type: 'check',
      codeLineType: 'checkComplement'
    },
    {
      type: 'found',
      description: (complement, index) => `Found complement ${complement} at index ${index}!`,
      codeLineType: 'found'
    },
    {
      type: 'store',
      description: (value, index) => `Store ${value} -> ${index} in hash map`,
      codeLineType: 'addToMap'
    },
    {
      type: 'noSolution',
      description: () => 'No solution found',
      codeLineType: 'noSolution'
    }
  ]
};

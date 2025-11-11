import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, TrendingUp, Info, CheckCircle } from 'lucide-react';
import { algorithms } from '../data/dataStructures';
import { codeExamples } from '../data/codeExamples';
import CodeTabs from '../components/ui/CodeTabs';

const AlgorithmDetail = () => {
  const { id } = useParams();
  const algo = algorithms.find((item) => item.id === id);

  if (!algo) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Algorithm Not Found
          </h1>
          <Link to="/algorithms" className="text-purple-600 hover:text-purple-700">
            ← Back to Algorithms
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/algorithms"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Algorithms
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {algo.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{algo.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Complexity Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Time Complexity */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Clock className="text-purple-500 mr-2" size={24} />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Time Complexity
              </h2>
            </div>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg px-4 py-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Best Case:
                  </span>
                  <span className="font-mono font-bold text-lg text-green-700 dark:text-green-400">
                    {algo.timeComplexity.best}
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 rounded-lg px-4 py-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Average Case:
                  </span>
                  <span className="font-mono font-bold text-lg text-yellow-700 dark:text-yellow-400">
                    {algo.timeComplexity.average}
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 rounded-lg px-4 py-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Worst Case:
                  </span>
                  <span className="font-mono font-bold text-lg text-red-700 dark:text-red-400">
                    {algo.timeComplexity.worst}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Space Complexity & Category */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-blue-500 mr-2" size={24} />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Space Complexity
              </h2>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg px-4 py-4 mb-6">
              <span className="font-mono font-bold text-3xl text-blue-700 dark:text-blue-400">
                {algo.spaceComplexity}
              </span>
            </div>

            <div className="flex items-center mb-3">
              <Info className="text-purple-500 mr-2" size={20} />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Algorithm Category
              </h3>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg px-4 py-3">
              <span className="text-purple-700 dark:text-purple-300 font-semibold capitalize">
                {algo.category.replace('-', ' ')}
              </span>
            </div>
          </div>
        </div>

        {/* Visualization Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Visual Demonstration
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Interactive visualization for {algo.name} coming soon!
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                In the meantime, check out the code examples below
              </p>
            </div>
          </div>
        </div>

        {/* Code Examples Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Implementation Examples
          </h2>
          {codeExamples.algorithms[id] ? (
            <CodeTabs codeExamples={codeExamples.algorithms[id]} />
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Code examples for {algo.name} coming soon!
              </p>
            </div>
          )}
        </div>

        {/* Key Characteristics */}
        <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center">
            <CheckCircle className="mr-2" size={24} />
            Key Characteristics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ✅ Advantages
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• Efficient for specific use cases</li>
                <li>• Well-established algorithm</li>
                <li>• Easy to implement and understand</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ⚠️ Considerations
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• May not be optimal for all inputs</li>
                <li>• Consider input size and constraints</li>
                <li>• Test edge cases thoroughly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmDetail;

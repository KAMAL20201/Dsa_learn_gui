import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, TrendingUp, Info } from 'lucide-react';
import { dataStructures } from '../data/dataStructures';
import { codeExamples } from '../data/codeExamples';
import ArrayVisualizer from '../components/visualizations/ArrayVisualizer';
import StepByStepLinkedListVisualizer from '../components/visualizations/StepByStepLinkedListVisualizer';
import CodeTabs from '../components/ui/CodeTabs';

const DataStructureDetail = () => {
  const { id } = useParams();
  const ds = dataStructures.find((item) => item.id === id);

  if (!ds) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Data Structure Not Found
          </h1>
          <Link to="/data-structures" className="text-blue-600 hover:text-blue-700">
            ← Back to Data Structures
          </Link>
        </div>
      </div>
    );
  }

  // Map data structure IDs to their visualizer components
  const visualizers = {
    array: ArrayVisualizer,
    'linked-list': StepByStepLinkedListVisualizer,
  };

  const VisualizerComponent = visualizers[id];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/data-structures"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Data Structures
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {ds.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{ds.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Complexity Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Time Complexity */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Clock className="text-blue-500 mr-2" size={24} />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Time Complexity
              </h2>
            </div>
            <div className="space-y-2">
              {Object.entries(ds.timeComplexity).map(([operation, complexity]) => (
                <div
                  key={operation}
                  className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-2"
                >
                  <span className="text-gray-700 dark:text-gray-300 capitalize">
                    {operation}:
                  </span>
                  <span className="font-mono font-semibold text-blue-600 dark:text-blue-400">
                    {complexity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Space Complexity & Operations */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-green-500 mr-2" size={24} />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Space Complexity
              </h2>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg px-4 py-3 mb-6">
              <span className="font-mono font-bold text-2xl text-green-700 dark:text-green-400">
                {ds.spaceComplexity}
              </span>
            </div>

            <div className="flex items-center mb-3">
              <Info className="text-purple-500 mr-2" size={20} />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Supported Operations
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {ds.operations.map((op) => (
                <span
                  key={op}
                  className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg text-sm font-medium"
                >
                  {op}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Visualization Section */}
        {VisualizerComponent ? (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interactive Step-by-Step Visualization
            </h2>
            <VisualizerComponent />
          </div>
        ) : (
          <div className="mb-8 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-6 text-center">
            <p className="text-yellow-800 dark:text-yellow-200">
              Visualization for {ds.name} coming soon!
            </p>
          </div>
        )}

        {/* Code Examples Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Implementation Examples
          </h2>
          {codeExamples.dataStructures[id] ? (
            <CodeTabs codeExamples={codeExamples.dataStructures[id]} />
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Code examples for {ds.name} coming soon!
              </p>
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
            💡 When to Use {ds.name}
          </h2>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li>• Fast random access is needed (arrays)</li>
            <li>• Frequent insertions/deletions at arbitrary positions</li>
            <li>• Memory efficiency is important</li>
            <li>• Need to maintain order of elements</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataStructureDetail;

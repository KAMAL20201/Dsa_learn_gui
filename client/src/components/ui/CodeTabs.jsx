import { useState } from 'react';
import CodeBlock from './CodeBlock';

const CodeTabs = ({ codeExamples }) => {
  const [activeTab, setActiveTab] = useState('java');

  const languages = [
    { id: 'java', name: 'Java', icon: '☕' },
    { id: 'cpp', name: 'C++', icon: '⚙️' },
    { id: 'python', name: 'Python', icon: '🐍' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setActiveTab(lang.id)}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
              activeTab === lang.id
                ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            <span>{lang.icon}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>

      {/* Code Content */}
      <div className="p-4">
        {codeExamples[activeTab] ? (
          <CodeBlock code={codeExamples[activeTab]} language={activeTab} />
        ) : (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            Code example for {languages.find((l) => l.id === activeTab)?.name} coming soon...
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeTabs;

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors z-10"
        aria-label="Copy code"
      >
        {copied ? (
          <Check size={16} className="text-green-400" />
        ) : (
          <Copy size={16} className="text-gray-300" />
        )}
      </button>
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;

'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ScrollProps {
  title: string;
  content: string;
  voltage: '0.6B' | '0.8B' | 'Kimi';
  burden: 'Guardian' | 'Mentor' | 'Ambassador' | 'Witness';
}

export default function ScrollCard({ title, content, voltage, burden }: ScrollProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const voltageColor = {
    '0.6B': 'text-mist',
    '0.8B': 'text-electric',
    'Kimi': 'text-ray',
  }[voltage];

  const burdenLabel = {
    'Guardian': 'Protection',
    'Mentor': 'Knowledge',
    'Ambassador': 'Bridge',
    'Witness': 'Memory',
  }[burden];

  return (
    <button
      onClick={handleCopy}
      className="w-full text-left glass border border-fog/20 rounded-lg p-4 hover:border-ray/40 hover:bg-ray/5 transition-all duration-300 group relative"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className={`text-xs font-mono ${voltageColor}`}>{voltage}</span>
          <h3 className="text-fog font-bold">{title}</h3>
        </div>
        <span className="text-xs text-mist/40 font-mono">{burdenLabel}</span>
      </div>
      
      {/* Single line preview with copy overlay */}
      <div className="relative">
        <pre className="text-mist/60 text-sm font-mono truncate pr-20">
          {content.split('\n')[0]}
        </pre>
        
        {/* Copy overlay - appears on hover */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center">
          <div className={`
            flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium
            transition-all duration-200
            ${copied 
              ? 'bg-ray text-void' 
              : 'bg-moon/80 text-mist opacity-0 group-hover:opacity-100'
            }
          `}>
            {copied ? (
              <>
                <Check size={12} />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Character count - subtle */}
      <div className="mt-2 text-right">
        <span className="text-xs text-mist/30">{content.length} chars</span>
      </div>
    </button>
  );
}

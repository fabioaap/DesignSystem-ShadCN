'use client';

import * as React from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodePreviewProps {
    react: string;
    vue: string;
    vanilla: string;
    className?: string;
}

type TabType = 'react' | 'vue' | 'vanilla';

const tabLabels: Record<TabType, string> = {
    react: 'React',
    vue: 'Vue',
    vanilla: 'Vanilla HTML/JS',
};

const tabLanguages: Record<TabType, string> = {
    react: 'tsx',
    vue: 'vue',
    vanilla: 'html',
};

export function CodePreview({ react, vue, vanilla, className }: CodePreviewProps) {
    const [activeTab, setActiveTab] = React.useState<TabType>('react');
    const [copied, setCopied] = React.useState(false);

    const snippets: Record<TabType, string> = { react, vue, vanilla };

    const handleCopy = async () => {
        await navigator.clipboard.writeText(snippets[activeTab]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={cn('rounded-lg border bg-zinc-950 text-zinc-50 overflow-hidden', className)}>
            {/* Tab Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4">
                <div className="flex">
                    {(Object.keys(tabLabels) as TabType[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                'px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px',
                                activeTab === tab
                                    ? 'border-blue-500 text-blue-400'
                                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                            )}
                        >
                            {tabLabels[tab]}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded px-2 py-1 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-colors"
                >
                    {copied ? (
                        <>
                            <Check className="h-3.5 w-3.5" />
                            Copied!
                        </>
                    ) : (
                        <>
                            <Copy className="h-3.5 w-3.5" />
                            Copy
                        </>
                    )}
                </button>
            </div>

            {/* Code Content */}
            <div className="relative">
                <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
                    <code className={`language-${tabLanguages[activeTab]}`}>
                        {snippets[activeTab]}
                    </code>
                </pre>
            </div>
        </div>
    );
}

/**
 * Decorator component for Storybook stories
 * Wraps the story with a code preview panel
 */
interface StoryWithCodeProps {
    children: React.ReactNode;
    react: string;
    vue: string;
    vanilla: string;
}

export function StoryWithCode({ children, react, vue, vanilla }: StoryWithCodeProps) {
    const [showCode, setShowCode] = React.useState(false);

    return (
        <div className="space-y-4">
            <div className="flex justify-end">
                <button
                    onClick={() => setShowCode(!showCode)}
                    className="text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
                >
                    {showCode ? 'Hide Code' : 'Show Code'}
                </button>
            </div>

            {/* Component Preview */}
            <div className="p-6 border rounded-lg bg-background">
                {children}
            </div>

            {/* Code Preview */}
            {showCode && (
                <CodePreview react={react} vue={vue} vanilla={vanilla} />
            )}
        </div>
    );
}

export default CodePreview;

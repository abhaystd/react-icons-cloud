"use client";

import { useEffect, useState } from "react";

interface IconDetailPanelProps {
    isOpen: boolean;
    onClose: () => void;
    iconName: string;
    packageName: string;
    IconComponent: React.ComponentType<any>;
}

export const IconDetailPanel = ({
    isOpen,
    onClose,
    iconName,
    packageName,
    IconComponent,
}: IconDetailPanelProps) => {
    const [copied, setCopied] = useState("");
    const [size, setSize] = useState(120);
    const [color, setColor] = useState("currentColor");

    const importString = `import { ${iconName} } from "${packageName}";`;
    const examples = [
        { label: "Standard", code: `<${iconName} size="${size}px"${color !== "currentColor" ? ` color="${color}"` : ""} />` },
        { label: "With Tailwind", code: `<${iconName} className="text-blue-500 hover:text-blue-700 text-3xl" />` },
        { label: "With Style", code: `<${iconName} style={{ color: 'red', fontSize: '24px' }} />` },
        { label: "With Event", code: `<${iconName} onClick={() => alert('Clicked!')} />` },
    ];

    const copyToClipboard = async (text: string, label: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(label);
            setTimeout(() => setCopied(""), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="w-[550px] h-screen sticky top-0 border-l border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col animate-in slide-in-from-right duration-300 z-20 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-zinc-800 shrink-0">
                <h2 className="text-xl font-bold dark:text-white truncate pr-4">{iconName}</h2>
                <button
                    onClick={onClose}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                >
                    ✕
                </button>
            </div>

            {/* Content with Custom Scroller */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                {/* Preview */}
                <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="w-full h-60 bg-gray-50 dark:bg-zinc-950 rounded-xl border border-gray-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden">
                        <div className="text-[200px] leading-none text-gray-800 dark:text-gray-100 flex items-center justify-center shrink-0">
                            <IconComponent size={size} color={color} />
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-500 text-center">
                        Preview
                    </p>
                </div>

                {/* Playground */}
                <div className="space-y-4 p-4 bg-gray-50 dark:bg-zinc-950 rounded-xl border border-gray-200 dark:border-zinc-800">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold dark:text-white uppercase tracking-wider">Playground</h3>
                        <button
                            onClick={() => { setSize(120); setColor("currentColor"); }}
                            className="text-[10px] text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
                        >
                            Reset
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] font-semibold text-gray-500 uppercase">Size</label>
                                <span className="text-[10px] text-gray-400 font-mono">{size}px</span>
                            </div>
                            <input
                                type="range"
                                min="16"
                                max="200"
                                value={size}
                                onChange={(e) => setSize(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-gray-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-semibold text-gray-500 uppercase block">Color</label>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="color"
                                    value={color === "currentColor" ? "#000000" : color}
                                    onChange={(e) => setColor(e.target.value)}
                                    className="w-8 h-8 rounded border-none cursor-pointer bg-transparent"
                                />
                                <input
                                    type="text"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    placeholder="Hex color"
                                    className="flex-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded px-2 py-1 text-[10px] font-mono dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Code Snippets */}
                <div className="space-y-6">
                    {/* Import */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                            Import
                        </label>
                        <div
                            className="group relative bg-zinc-950 rounded-lg p-3 font-mono text-xs text-zinc-300 cursor-pointer hover:ring-1 hover:ring-blue-500 transition-all border border-zinc-800"
                            onClick={() => copyToClipboard(importString, "import")}
                        >
                            <code className="break-all">{importString}</code>
                            <div className={`absolute right-2 top-2 transition-all bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded ${copied === "import" ? "opacity-100" : "opacity-40 group-hover:opacity-100"}`}>
                                {copied === "import" ? "Copied!" : "Copy"}
                            </div>
                        </div>
                    </div>

                    {/* Usage Examples */}
                    <div className="space-y-4">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                            Usage Examples
                        </label>
                        <div className="space-y-4">
                            {examples.map((ex, i) => (
                                <div key={i} className="space-y-1.5">
                                    <span className="text-[10px] text-gray-500 font-medium">{ex.label}</span>
                                    <div
                                        className="group relative bg-zinc-950 rounded-lg p-3 font-mono text-xs text-zinc-300 cursor-pointer hover:ring-1 hover:ring-blue-500 transition-all border border-zinc-800"
                                        onClick={() => copyToClipboard(ex.code, `usage-${i}`)}
                                    >
                                        <code className="whitespace-pre-wrap">{ex.code}</code>
                                        <div className={`absolute right-2 top-2 transition-all bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded ${copied === `usage-${i}` ? "opacity-100" : "opacity-40 group-hover:opacity-100"}`}>
                                            {copied === `usage-${i}` ? "Copied!" : "Copy"}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer info */}
                <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 text-blue-700/80 dark:text-blue-300/80 rounded-lg text-xs border border-blue-100 dark:border-blue-900/20">
                    <p>
                        <strong>Tip:</strong> You can pass SVG props like <code>className</code>, <code>style</code>, or event handlers.
                    </p>
                </div>
            </div>
        </div>
    );
};

"use client";

import { useState, useMemo } from "react";
import * as AwsIcons from "@react-icons-cloud/aws";
// import * as CoreIcons from "@react-icons-cloud/core"; // If needed later
import { IconDetailPanel } from "./IconDetailPanel";

interface IconSet {
    [key: string]: React.ComponentType<any>;
}

const sets: Record<string, { icons: IconSet; label: string }> = {
    aws: { icons: AwsIcons as any, label: "@react-icons-cloud/aws" },
    // core: { icons: CoreIcons, label: "@react-icons-cloud/core" },
};

export const IconGrid = ({ initialPackage = "aws" }: { initialPackage?: string }) => {
    const [query, setQuery] = useState("");
    const [activePackage, setActivePackage] = useState(initialPackage);
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

    const currentSet = sets[activePackage] || sets.aws;
    const icons = currentSet.icons;

    const filteredIcons = useMemo(() => {
        const q = query.toLowerCase();
        return Object.keys(icons).filter((name) =>
            name.toLowerCase().includes(q)
        );
    }, [query, icons]);

    return (
        <div className="flex w-full h-screen overflow-hidden bg-white dark:bg-black">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Sticky Search Header */}
                <div className="sticky top-0 z-10 p-4 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800">
                    <h1 className="sr-only">Browse and search for Cloud Provider Icons</h1>
                    <div className="max-w-4xl mx-auto flex items-center gap-4">
                        <input
                            type="text"
                            placeholder={`Search ${Object.keys(icons).length} icons...`}
                            className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Scrollable Grid */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className={`mx-auto grid gap-4 transition-all duration-300 ${selectedIcon
                        ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                        : "grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 max-w-4xl"
                        }`}>
                        {filteredIcons.map((name) => {
                            const Icon = icons[name];
                            const isSelected = selectedIcon === name;
                            return (
                                <div
                                    key={name}
                                    className={`group flex flex-col items-center justify-center p-4 rounded-xl border transition-all cursor-pointer ${isSelected
                                        ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 ring-1 ring-blue-500 shadow-md transform scale-[1.02]"
                                        : "border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg"
                                        }`}
                                    onClick={() => setSelectedIcon(isSelected ? null : name)}
                                >
                                    <div className={`text-3xl mb-3 transition-colors ${isSelected ? "text-blue-500" : "text-gray-700 dark:text-gray-300 group-hover:text-blue-500"
                                        }`}>
                                        <Icon />
                                    </div>
                                    <span className={`text-[10px] text-center break-all line-clamp-2 ${isSelected ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-500"
                                        }`}>
                                        {name}
                                    </span>
                                </div>
                            );
                        })}

                        {filteredIcons.length === 0 && (
                            <div className="col-span-full py-20 text-center text-gray-400">
                                No icons found for "{query}"
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Side Panel */}
            <IconDetailPanel
                isOpen={!!selectedIcon}
                onClose={() => setSelectedIcon(null)}
                iconName={selectedIcon || ""}
                packageName={currentSet.label}
                IconComponent={selectedIcon ? icons[selectedIcon] : () => null}
            />
        </div>
    );
};

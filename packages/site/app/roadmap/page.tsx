import React from "react";

export const metadata = {
  title: "Packages & Roadmap | React Icons Cloud",
  description: "Explore our existing packages and see what's coming next to React Icons Cloud.",
};

export default function RoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">Packages & Roadmap</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Current Packages</h2>
        <div className="grid gap-6">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">@react-icons-cloud/aws</h3>
              <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-medium">Available</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A comprehensive set of 500+ AWS architecture and resource icons. Optimized, tree-shakeable, and fully typed.
            </p>
            <code className="block p-3 bg-gray-100 dark:bg-black rounded-lg text-sm">
              npm install @react-icons-cloud/aws
            </code>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">@react-icons-cloud/core</h3>
              <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-medium">Available</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The core utility package providing the IconBase component and shared TypeScript types for all icon sets.
            </p>
            <code className="block p-3 bg-gray-100 dark:bg-black rounded-lg text-sm">
              npm install @react-icons-cloud/core
            </code>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Coming Soon</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-dashed border-gray-300 dark:border-zinc-700">
            <h3 className="text-lg font-semibold mb-2">Azure Icons</h3>
            <p className="text-sm text-gray-500">Full set of Microsoft Azure architecture icons.</p>
          </div>
          <div className="p-6 rounded-xl border border-dashed border-gray-300 dark:border-zinc-700">
            <h3 className="text-lg font-semibold mb-2">GCP Icons</h3>
            <p className="text-sm text-gray-500">Google Cloud Platform resource and service icons.</p>
          </div>
          <div className="p-6 rounded-xl border border-dashed border-gray-300 dark:border-zinc-700">
            <h3 className="text-lg font-semibold mb-2">OCI Icons</h3>
            <p className="text-sm text-gray-500">Oracle Cloud Infrastructure architecture icons.</p>
          </div>
          <div className="p-6 rounded-xl border border-dashed border-gray-300 dark:border-zinc-700">
            <h3 className="text-lg font-semibold mb-2">Kubernetes Icons</h3>
            <p className="text-sm text-gray-500">Standard Kubernetes resource and component icons.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Future Roadmap</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">1</div>
            <div>
              <h4 className="font-medium">Multi-Provider Search</h4>
              <p className="text-sm text-gray-500">Search across all cloud providers from a single interface.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">2</div>
            <div>
              <h4 className="font-medium">Icon Customization API</h4>
              <p className="text-sm text-gray-500">More advanced props for dynamic icon modifications.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">3</div>
            <div>
              <h4 className="font-medium">SVG-to-React CLI</h4>
              <p className="text-sm text-gray-500">A tool for developers to generate their own optimized icon packages.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

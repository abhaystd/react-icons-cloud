import React from "react";

export const metadata = {
  title: "About Us | React Icons Cloud",
  description: "Learn more about the React Icons Cloud project and how to get in touch.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">About React Icons Cloud</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Our Mission</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          React Icons Cloud was born out of a simple need: a unified, high-quality, and easy-to-use icon library for cloud architects and developers.
          We provide optimized React components for cloud provider icons, starting with a comprehensive set of over 500+ AWS icons.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Key Features</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
          <li><strong>Optimized SVGs:</strong> Every icon is cleaned and optimized for the web.</li>
          <li><strong>Tree-shakeable:</strong> Only bundle the icons you actually use in your app.</li>
          <li><strong>Fully Typed:</strong> Built with TypeScript for excellent developer experience.</li>
          <li><strong>Customizable:</strong> Easily adjust size, color, and other SVG properties via props.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Contact & Support</h2>
        <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-zinc-800">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Have questions, suggestions, or want to report a bug? We'd love to hear from you.
          </p>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:abhayya0701@gmail.com" className="text-blue-500 hover:underline">
                Mail us
              </a>
            </p>
            <p>
              <span className="font-medium">GitHub:</span>{" "}
              <a href="https://github.com/abhaystd/react-icons-cloud" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                github.com/abhaystd/react-icons-cloud
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export const Sidebar = () => {
    return (
        <aside className="w-64 h-screen fixed left-0 top-0 overflow-y-auto border-r border-gray-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 p-4">
            <div className="mb-8">
                <h1 className="text-xl font-bold text-primary">React Icons Cloud</h1>
                <p className="text-sm text-gray-500">v1.0.0</p>
            </div>

            <nav className="space-y-1">
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Cloud Providers
                </h2>
                <Link
                    href="/?package=aws"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                    AWS
                </Link>
                {/* Add more providers here */}
            </nav>
        </aside>
    );
};

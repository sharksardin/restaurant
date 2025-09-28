
import MapComponent from '@/components/Map';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Restaurant Finder</h1>
          <p className="text-gray-600 mt-1">Find the best places to eat near you!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Sidebar */}
        <aside className="md:col-span-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-3">Search & Filter</h2>
          
          {/* Search Input */}
          <div className="mb-6">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Restaurant Name
            </label>
            <input
              type="text"
              id="search"
              placeholder="e.g., Pizza Palace"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Placeholder for restaurant list */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Results</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 rounded-lg animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2 mt-2"></div>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2 mt-2"></div>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2 mt-2"></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Map Area */}
        <div className="md:col-span-2 h-[600px] rounded-lg shadow-lg overflow-hidden">
          <MapComponent />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 py-6">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; 2025 Restaurant Finder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

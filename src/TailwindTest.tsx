function TailwindTest() {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        🎉 Tailwind CSS v4 Test
      </h2>
      <div className="space-y-4">
        <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md">
          <p className="font-medium">Gradient Background</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-16 bg-red-400 rounded"></div>
          <div className="h-16 bg-green-400 rounded"></div>
          <div className="h-16 bg-blue-400 rounded"></div>
        </div>
        <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition-colors duration-200">
          Tailwind Button
        </button>
      </div>
    </div>
  )
}

export default TailwindTest
export default function WordList({ words, onWordDeleted }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 w-full max-w-4xl">
      {words.map((w) => (
        <div
          key={w.id}
          className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-indigo-400 font-semibold text-lg">
              {w.article ? `${w.article} ${w.originalWord}` : w.originalWord}
            </h2>
            <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full">
              {w.language}
            </span>
          </div>
          <p className="text-gray-300 text-sm">{w.translation}</p>
          <p className="text-gray-400 italic mt-2">{w.exampleSentence}</p>
          <button
            onClick={() => onWordDeleted(w.id)}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded transition-colors duration-300"
          >
            Sil
          </button>
        </div>
      ))}
    </div>
  );
}

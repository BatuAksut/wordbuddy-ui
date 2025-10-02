import { useState } from "react";
import { addWord } from "../api/wordsapi";

export default function WordForm({ onWordAdded }) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    try {
      setLoading(true);
      const word = await addWord(value.trim());
      onWordAdded(word);
      setValue("");
    } catch (err) {
      console.error("Error adding word:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 duration-300"
    >
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Yeni kelime gir"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 bg-gray-900 text-gray-100 placeholder-gray-400 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? "Ekleniyor..." : "Ekle"}
        </button>
      </div>
    </form>
  );
}

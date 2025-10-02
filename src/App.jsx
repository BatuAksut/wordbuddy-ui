import { useEffect, useState } from "react";
import WordForm from "./components/WordForm";
import WordList from "./components/WordList";
import { getWords } from "./api/wordsapi";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    getWords().then(setWords).catch(console.error);
  }, []);

  const handleWordAdded = (word) => {
    setWords((prev) => [word, ...prev]);
    toast.success("Kelime başarıyla eklendi ✅", {
  style: {
    background: "#1f2937", // bg-gray-800
    color: "#e0e7ff",      // text-indigo-100
    border: "1px solid #4f46e5", // border-indigo-600
  },
  iconTheme: {
    primary: "#6366f1", // indigo-500
    secondary: "#1f2937", // bg-gray-800
  },
});
  };

  const handleWordDeleted = (id) => {
    setWords((prev) => prev.filter((w) => w.id !== id));
    
toast.error("Kelime silindi 🗑️", {
  style: {
    background: "#1f2937",
    color: "#fee2e2", // text-red-200
    border: "1px solid #dc2626", // border-red-600
  },
  iconTheme: {
    primary: "#ef4444", // red-500
    secondary: "#1f2937",
  },
});
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 transition-colors duration-500 flex flex-col items-center py-10">
      <h1 className="text-4xl font-extrabold text-indigo-400  mb-8 text-center">
        WordBuddy 📚
      </h1>

      <WordForm onWordAdded={handleWordAdded} />

      <div className="h-6" />

      <WordList words={words} onWordDeleted={handleWordDeleted} />

      {/* Toast container */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}


export default App;

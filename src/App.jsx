import { useEffect, useState } from "react";
import WordForm from "./components/WordForm";
import WordList from "./components/WordList";
import { getWords } from "./api/wordsapi";

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    getWords().then(setWords).catch(console.error);
  }, []);

  const handleWordAdded = (word) => setWords((prev) => [word, ...prev]);
  const handleWordDeleted = (id) =>
    setWords((prev) => prev.filter((w) => w.id !== id));

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 transition-colors duration-500 flex flex-col items-center py-10">
      <h1 className="text-4xl font-extrabold text-indigo-400  mb-8 text-center">
        WordBuddy 📚
      </h1>

      <WordForm onWordAdded={handleWordAdded} />

      <div className="h-6" />

      <WordList words={words} onWordDeleted={handleWordDeleted} />
    </div>
  );
}

export default App;

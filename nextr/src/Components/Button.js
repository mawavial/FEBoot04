

function Button({ text, onClick }) {
  return (
    
    <button
      className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
      onClick={onClick}
      aria-label="this is a pink button"
      title="this is a pink button"
    >
      {text}
    </button>
  );
}
export default function Button({ children }) {
  return (
    <button className="bg-purple-500 hover:bg-purple-400 px-4 py-2 cursor-pointer rounded-xl text-white font-semibold transition transition-colors text-lg">
      {children}
    </button>
  );
}

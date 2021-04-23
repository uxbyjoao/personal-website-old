export default function Button({ children }) {
  return (
    <button className="bg-indigo-500 hover:bg-indigo-400 px-4 py-2 lg:px-6 lg:py-4 cursor-pointer rounded-xl text-white transition-colors text-lg lg:text-2xl">
      {children}
    </button>
  );
}

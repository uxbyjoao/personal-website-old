export default function Prose({ children }) {
  return (
    <div className="prose dark:prose-dark max-w-none md:prose-lg xl:prose-2xl transition-colors">
      {children}
    </div>
  );
}

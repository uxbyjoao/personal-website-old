export default function Prose({ children }) {
  return (
    <div className="prose dark:prose-dark max-w-none md:prose-md xl:prose-lg transition-colors">
      {children}
    </div>
  );
}

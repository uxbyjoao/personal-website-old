export default function Heading({ children }) {
  return (
    <>
      <h3 className="mb-3 text-md text-gray-500 dark:text-gray-400 font-medium uppercase">
        {children}
      </h3>
      <hr className="mb-6 dark:border-gray-700" />
    </>
  );
}

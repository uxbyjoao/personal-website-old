import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="dark:bg-gray-900 bg-gray-50 transition transition-colors">
      <Component {...pageProps} />
    </div>
  );
}

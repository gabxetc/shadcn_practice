// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-white text-gray-50 p-4 sm:p-8"> {/* Dark background, light text, responsive padding */}
      <div className="text-center space-y-6"> {/* Centralized content with vertical spacing */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-black tracking-tight"> {/* Larger, modern font size */}
          404
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-medium"> {/* Clearer, slightly larger message */}
          Page Not Found.
        </p>
        <p className="text-gray-400 max-w-lg mx-auto leading-relaxed"> {/* Subtler helper text */}
          We couldn't find the page you were looking for. It might have been moved or deleted.
        </p>

        {/* Modern Button Style */}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
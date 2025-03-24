// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <Link href="/" className="text-blue-500">Go back to Home</Link>
    </div>
  );
}

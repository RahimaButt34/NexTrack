

// import Link from "next/link";

// export default function LandingPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-4xl font-bold mb-6">Welcome to NextTrack</h1>
//       <div className="space-x-4">
//         <Link href="/register" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Register
//         </Link>
//         <Link href="/login" className="bg-green-500 text-white px-4 py-2 rounded">
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// }


import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
        Manage Your Projects with <span className="text-blue-600">NextTrack</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        The ultimate scratch-built solution for tracking your progress without any third-party limitations.
      </p>
      <div className="flex gap-4">
        <Link 
          href="/register" 
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
        <Link 
          href="/login" 
          className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition"
        >
          View Demo
        </Link>
      </div>
    </div>
  );
}
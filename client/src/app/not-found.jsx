import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Etni Details me man nhi bhara kya?
      </h1>
      <p className="text-lg text-gray-600 mb-8">Jo ya bhi chale aye!</p>
      <Link
        href={"/"}
        className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-red-600 transition duration-300"
      >
        Chal Nikal
      </Link>
    </div>
  );
}

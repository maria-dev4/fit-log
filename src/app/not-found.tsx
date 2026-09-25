import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#020B1C] px-5 text-center text-white">
      <div>
        

        <h1 className="mt-4 text-6xl font-black tracking-tight sm:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold">Workout Not Found</h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-lg bg-[#1687FF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3299FF]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

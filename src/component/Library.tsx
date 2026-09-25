"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

const Library = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch workouts");
        }
        return res.json();
      })
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, []);

if (loading) {
  return (
    <section className="min-h-[400px] bg-[#020B1C] px-6 py-20 text-center text-white">
      <span className="loading loading-spinner loading-lg"></span>
      <p className="mt-4 text-gray-400">Loading workouts…</p>
    </section>
  );
}

if (error) {
  return (
    <section className="min-h-[400px] bg-[#020B1C] px-6 py-20 text-center text-white">
      <h2 className="text-2xl font-bold">Unable to load workouts</h2>
      <p className="mt-3 text-sm text-gray-400">Please try again later.</p>
    </section>
  );
}

  return (
    <section id="library" className="bg-[#020B1C] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#4AA8FF]">
            WORKOUT LIBRARY
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            THE LIBRARY
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-400 md:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {workouts.map((workout) => (
            <Link
              href={`/workouts/${workout.id}`}
              key={workout.id}
              className="group block overflow-hidden rounded-2xl border border-[#123B70] bg-[#071A36] transition duration-300 hover:-translate-y-1 hover:border-[#3299FF] hover:shadow-[0_12px_40px_rgba(22,135,255,0.15)]">
              <div className="relative overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"/>

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A36] via-transparent to-transparent" />

                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {workout.muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full border border-[#3299FF]/40 bg-[#020B1C]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#4AA8FF] backdrop-blur-sm"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                <span className="absolute bottom-4 right-4 rounded-full border border-[#3299FF]/40 bg-[#1687FF] px-3 py-1 text-[11px] font-bold uppercase text-white">
                  {workout.difficulty}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-white transition group-hover:text-[#4AA8FF]">
                  {workout.name}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {workout.equipment}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[#123B70] pt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-gray-500">
                      Time
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {workout.duration} min
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-gray-500">
                      Burn
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {workout.caloriesBurned} kcal
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-gray-500">
                      Rating
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      ★ {workout.rating}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;

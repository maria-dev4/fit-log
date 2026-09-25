"use client";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { usePlan } from "../../../context/PlanContext";

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

const WorkoutDetails = () => {
  const params = useParams<{ id: string }>();
  const { addToPlan, saveWorkout } = usePlan();
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.abcz.workers.dev/api/fitlog/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setWorkout(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#020B1C] px-6 py-24 text-center text-white">
        <span className="loading loading-spinner loading-lg text-[#3299FF]"></span>
        <p className="mt-4 text-sm text-gray-400">Loading workout…</p>
      </main>
    );
  }

  if (!workout) {
    return (
      <main className="min-h-screen bg-[#020B1C] px-6 py-24 text-center text-white">
        <h1 className="text-3xl font-bold">Workout not found</h1>
        <p className="mt-3 text-gray-400">
          The workout you are looking for does not exist.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020B1C] px-6 py-14 text-white md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <img
              src={workout.image}
              alt={workout.name}
              className="h-[520px] w-full rounded-2xl object-cover sm:h-[600px]"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-5 text-sm leading-6 text-gray-400 sm:text-base">
              {workout.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full border border-[#3299FF]/40 bg-[#1687FF] px-4 py-1.5 text-xs font-bold uppercase text-white"
                >
                  {muscle}
                </span>
              ))}

              <span className="rounded-full border border-[#3299FF]/40 bg-[#1687FF] px-4 py-1.5 text-xs font-bold uppercase text-white">
                {workout.difficulty}
              </span>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-[#123B70] bg-[#071A36]">
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                  Equipment
                </span>

                <span className="text-sm text-white">{workout.equipment}</span>
              </div>

              <div className="border-t border-[#123B70]" />

              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                  Difficulty
                </span>
                <span className="text-sm text-white">{workout.difficulty}</span>
              </div>

              <div className="border-t border-[#123B70]" />

              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                  Sets
                </span>
                <span className="text-sm text-white">{workout.sets}</span>
              </div>

              <div className="border-t border-[#123B70]" />

              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                  Reps
                </span>

                <span className="text-sm text-white">{workout.reps}</span>
              </div>

              <div className="border-t border-[#123B70]" />

              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                  Duration
                </span>

                <span className="text-sm text-white">
                  {workout.duration} min
                </span>
              </div>

              <div className="border-t border-[#123B70]" />

              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                  Calories
                </span>
                <span className="text-sm text-white">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="border-t border-[#123B70]" />

              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                  Rating
                </span>

                <span className="text-sm font-semibold text-[#4AA8FF]">
                  ★ {workout.rating}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                Instructions
              </h2>

              <div className="mt-4 space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="font-bold text-[#4AA8FF]">
                      {index + 1}.
                    </span>
                    <p className="text-sm leading-6 text-gray-400">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => {
                  addToPlan(workout);
                  toast.success("Added to today's plan");
                }}
                className="btn border-none bg-[#1687FF] text-white hover:bg-[#3299FF]">
                Add to today&apos;s plan
              </button>

              <button
                onClick={() => {
                  saveWorkout(workout);
                  toast.success("Saved for later");
                }}
                className="btn border-[#123B70] bg-transparent text-white hover:border-[#3299FF] hover:bg-[#071A36]">
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;

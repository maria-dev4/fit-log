"use client";

import Link from "next/link";
import { useState } from "react";
import { usePlan } from "../../context/PlanContext";
import { toast } from "react-toastify";

type SortOption = "duration" | "calories" | "rating";

const MyPlan = () => {
  const { plan, saved, removeFromPlan, removeFromSaved } = usePlan();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<SortOption>("duration");
  const [completed, setCompleted] = useState<number[]>([]);

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const currentList = activeTab === "plan" ? plan : saved;

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  const handleDone = (id: number) => {
    setCompleted((prev) => (prev.includes(id) ? prev : [...prev, id]));

    toast.success("Workout marked as done");
  };

  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
      setCompleted((prev) => prev.filter((item) => item !== id));
      toast.success("Removed from today's plan");
    } else {
      removeFromSaved(id);
      toast.success("Removed from saved");
    }
  };

  return (
    <main className="min-h-screen bg-[#020B1C] px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-bold tracking-[0.18em] text-[#4AA8FF]">
            FITLOG
          </p>

          <h1 className="text-4xl font-bold tracking-wide sm:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mb-7 grid overflow-hidden rounded-2xl border border-[#123B70] bg-[#071A36] sm:grid-cols-3">
          <div className="border-b border-[#123B70] px-6 py-5 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-400">Exercises</p>

            <p className="mt-2 text-3xl font-bold text-[#4AA8FF]">
              {plan.length}
            </p>
          </div>

          <div className="border-b border-[#123B70] px-6 py-5 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-400">Minutes</p>

            <p className="mt-2 text-3xl font-bold text-white">{totalMinutes}</p>
          </div>

          <div className="px-6 py-5">
            <p className="text-xs text-gray-400">Calories</p>

            <p className="mt-2 text-3xl font-bold text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-fit rounded-lg border border-[#123B70] bg-[#071A36] p-1">
            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-4 py-2 text-xs font-semibold transition ${
                activeTab === "plan"
                  ? "bg-[#1687FF] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-xs font-semibold transition ${
                activeTab === "saved"
                  ? "bg-[#1687FF] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Sort By</span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="rounded-lg border border-[#123B70] bg-[#071A36] px-3 py-2 text-xs text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {sortedList.length === 0 ? (
          <div className="rounded-2xl border border-[#123B70] bg-[#071A36] px-6 py-16 text-center">
            <h2 className="text-2xl font-bold tracking-wide">
              NOTHING HERE YET
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-lg bg-[#1687FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3299FF]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedList.map((workout) => {
              const isDone = completed.includes(workout.id);

              return (
                <div
                  key={workout.id}
                  className="flex flex-col gap-4 rounded-2xl border border-[#123B70] bg-[#071A36] p-3 transition hover:border-[#3299FF] sm:flex-row sm:items-center"
                >
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-24 w-full rounded-xl object-cover sm:h-20 sm:w-28"
                  />

                  <div className="min-w-0 flex-1">
                    <h2
                      className={`text-sm font-bold uppercase tracking-wide ${
                        isDone ? "text-gray-500 line-through" : "text-white"
                      }`}
                    >
                      {workout.name}
                    </h2>

                    <p className="mt-1 text-xs text-gray-400">
                      {workout.equipment}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-400">
                      <span>◷ {workout.duration} min</span>

                      <span>◉ {workout.caloriesBurned} kcal</span>

                      <span>★ {workout.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="rounded-full border border-[#123B70] px-4 py-2 text-xs font-semibold text-gray-300 transition hover:border-[#3299FF] hover:text-white"
                    >
                      View Details
                    </Link>

                    {activeTab === "plan" && (
                      <button
                        onClick={() => handleDone(workout.id)}
                        disabled={isDone}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                          isDone
                            ? "cursor-default bg-[#0A2142] text-gray-500"
                            : "bg-[#1687FF] text-white hover:bg-[#3299FF]"
                        }`}
                      >
                        {isDone ? "✓ Done" : "✓ Mark as Done"}
                      </button>
                    )}

                    <button
                      onClick={() => handleRemove(workout.id)}
                      className="px-2 py-2 text-sm text-gray-500 transition hover:text-red-400"
                      aria-label={`Remove ${workout.name}`}
                    >
                      ×
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlan;

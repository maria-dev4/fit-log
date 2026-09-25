"use client";

import { createContext, useContext, useState, ReactNode } from "react";

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

type PlanContextType = {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => "added" | "duplicate" | "limit";
  saveWorkout: (workout: Workout) => "saved" | "duplicate";
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
};

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  const addToPlan = (workout: Workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      return "duplicate";
    }

    if (plan.length >= 5) {
      return "limit";
    }

    setPlan((prev) => [...prev, workout]);
    return "added";
  };

  const saveWorkout = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      return "duplicate";
    }

    setSaved((prev) => [...prev, workout]);
    return "saved";
  };

  const removeFromPlan = (id: number) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
  };

  const removeFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used inside PlanProvider");
  }

  return context;
};
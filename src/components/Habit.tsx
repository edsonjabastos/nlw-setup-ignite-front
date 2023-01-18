import React from "react";

interface HabitProps {
  completed: number;
}

export function Habit(props: HabitProps) {
  return <p className="bg-red-800">{props.completed}</p>;
}

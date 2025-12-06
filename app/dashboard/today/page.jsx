"use client";

// import { useTodayTasks } from "@/app/hooks/useTodayTasks";
import { useTodayTasks } from "../../hooks/useTodayTasks.js";
import TaskTable from "../../componenets/TaskTable.jsx";

export default function TodayTasksPage() {
  const { data, isLoading, error } = useTodayTasks();
// useTodayTasks
  if (isLoading) return <p>Loading tasks...</p>;
  if (error) return <p>Error fetching tasks: {error.message}</p>;
  if (!data || data.length === 0) return <p>No tasks due today 🎉</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tasks Due Today</h1>
      <TaskTable tasks={data} />
    </div>
  );
}

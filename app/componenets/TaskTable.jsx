"use client";

import { useCompleteTask } from "../hooks/useCompleteTask";

export default function TaskTable({ tasks }) {
  const completeTask = useCompleteTask();

  return (
    <table border="1" style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Application ID</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.application_id}</td>
            <td>{task.due_at}</td>
            <td>{task.status}</td>
            <td>
              <button
                disabled={completeTask.isLoading}
                onClick={() => completeTask.mutate(task.id)}
              >
                Mark Complete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

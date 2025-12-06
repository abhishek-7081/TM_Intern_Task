"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";

export function useCompleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (taskId) => {
      const { error } = await supabase
        .from("tasks")
        .update({ status: "completed" })
        .eq("id", taskId);

      if (error) throw error;
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["todayTasks"]);
    },
  });
}

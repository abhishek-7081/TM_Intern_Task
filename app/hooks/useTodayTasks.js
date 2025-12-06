"use client";

import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";

export function useTodayTasks() {
  const today = new Date().toISOString().split("T")[0];

  return useQuery({
    queryKey: ["todayTasks"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("due_at", today);

      if (error) throw error;
      return data;
    },
  });
}

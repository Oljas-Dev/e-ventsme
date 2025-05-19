import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../services/apiData";

export default function useAllData({ type }: { type: string }) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["events", type],
    queryFn: () => getAllData(type),
  });

  return {
    isLoading,
    data,
    error,
  };
}

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login as loginApi } from "./apiAuth";

export function useLogin() {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      navigate("/dashboard");
      console.log("success!", user);
      // queryClient.setQueryData(["user"], user);
    },
    onError: (error) => {
      console.error("Login failed:", error);
      // Handle error (e.g., show a notification to the user)
    },
  });
  return { login, isPending };
}

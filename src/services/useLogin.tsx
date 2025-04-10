import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login as loginApi } from "./apiAuth";
import toast from "react-hot-toast/headless";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      console.log("Login successful:", user);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials.");
      // Handle error (e.g., show a notification to the user)
    },
  });
  return { login, isPending };
}

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { signup as signupApi } from "../services/apiAuth";

export default function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      navigate("/authsuccess");
    },
  });

  return { signup, isPending };
}

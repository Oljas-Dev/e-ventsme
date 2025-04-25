import toast from "react-hot-toast";
import supabase from "./supabase";

interface updateUserProps {
  avatar?: string;
  gender?: string;
  fullName?: string;
  birthDate?: string;
  address?: string;
}

export async function signup({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        avatar: "",
        fullName: "",
        gender: "",
        birthDate: "",
        address: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function updateCurrentUser({
  avatar,
  fullName,
  gender = "",
  birthDate = "",
  address = "",
}: updateUserProps) {
  // 1. Update fullName
  let updateData:
    | { data: { fullName: string } }
    | { data: { gender: string; birthDate: string } }
    | { data: { address: string } };

  if (fullName) updateData = { data: { fullName } };
  if (gender && birthDate) updateData = { data: { gender, birthDate } };
  if (address) updateData = { data: { address } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Update avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatar")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);
  // 3. Update avatar in the user

  const { data: updateUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `https://rwceeeycfirwuhnqxaot.supabase.co/storage/v1/object/sign/avatar/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updateUser;
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error:", error.message);
    toast.error("Invalid login credentials");
    return null;
  }

  //   console.log(data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  // console.log(data);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

import supabase from "./supabase";

// interface DataProps {
//   dataStr: string;
// }

export async function getAllData(type: string) {
  const { data } = await supabase.from(type).select("*");
  return data;
}

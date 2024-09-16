import { supabase } from "../lib/supabase";

export async function checkMainAvatarExists(userId: string): Promise<boolean> {
  console.log("Checking user for main character:", userId);
  return true;
  // try {
  //   const response = await supabase
  //     .from("Character")
  //     .select("id")
  //     .eq("user_id", userId)
  //     .limit(1);

  //   console.log("Supabase response:", response);
  //   return true; // Always return true for now
  // } catch (error) {
  //   console.error("Error in checkMainAvatarExists:", error);
  //   return false;
  // }
}

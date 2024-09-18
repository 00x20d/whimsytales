import { supabase } from "../lib/supabase";

export async function checkMainAvatarExists(userId: string): Promise<boolean> {
  //console.log(`Checking main avatar for user ID: ${userId}`);
  //console.log("Supabase instance:", supabase);
  try {
    console.log(`Executing Supabase query for user ID: ${userId}`);

    const { data, error } = await supabase
      .from("Character")
      .select("id")
      .eq("user_id", userId)
      .eq("is_main", true);

    if (error) {
      console.log("Supabase query error:", error);
      return true;
    }

    console.log("Main avatar check result data:", data.length);
    console.log(`Number of main avatars found: ${data.length}`);

    return data.length > 0;
  } catch (error) {
    console.error("Error checking main avatar:", error);
    return false;
  }
}

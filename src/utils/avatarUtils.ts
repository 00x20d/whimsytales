import { supabase } from "../lib/supabase";

export async function checkMainAvatarExists(userId: string): Promise<boolean> {
  console.log("Checking main avatar for user:", userId);
  // Temporarily return true to test routing
  return true;
}

// export async function checkMainAvatarExists(userId: string): Promise<boolean> {
//   console.log("Checking user for main character:", userId);
//   try {
//     const { data, error } = await supabase
//       .from("Character")
//       .select("id")
//       .eq("user_id", userId)
//       .eq("is_main", true)
//       .single();

//     if (error) {
//       console.error(
//         "Error checking main avatar:",
//         error.message,
//         error.details,
//         error.hint
//       );
//       return false;
//     }

//     console.log("Main avatar check result:", data);
//     return !!data;
//   } catch (error) {
//     console.error("Unexpected error checking main avatar:", error);
//     return false;
//   }
// }

// export async function checkUserExists(userId: string): Promise<boolean> {
//   console.log("Checking if user exists:", userId);
//   try {
//     const { data, error } = await supabase
//       .from("User")
//       .select("id")
//       .eq("id", userId)
//       .single();

//     if (error) {
//       console.error(
//         "Error checking user:",
//         error.message,
//         error.details,
//         error.hint
//       );
//       return false;
//     }

//     console.log("User check result:", data);
//     return !!data;
//   } catch (error) {
//     console.error("Unexpected error checking user:", error);
//     return false;
//   }
// }

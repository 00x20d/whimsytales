import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setUser, setLoading, setError } from "../store/slices/authSlice";
import { supabase } from "../lib/supabase";
import { User } from "@supabase/supabase-js";
import { makeRedirectUri } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { useState } from "react";
import { checkMainAvatarExists } from "../utils/avatarUtils";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );
  const redirectUrl = makeRedirectUri({
    scheme: "whimsytales",
    path: "auth/callback",
  });

  const addUserToSupabase = async (userData: User) => {
    try {
      const { data, error } = await supabase.from("User").upsert(
        {
          id: userData.id,
          email: userData.email,
          name: userData.user_metadata?.full_name,
          profile_picture_url: userData.user_metadata?.avatar_url,
          auth_provider: "google",
          auth_provider_id: userData.app_metadata?.provider,
        },
        {
          onConflict: "id",
          ignoreDuplicates: false,
        }
      );

      if (error) throw error;
      console.log("User added/updated in Supabase successfully:", data);
    } catch (error) {
      console.error("Error in addUserToSupabase:", error);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      dispatch(setLoading(true));
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: redirectUrl,
        },
      });
      if (error) throw error;

      if (data?.url) {
        const result = await WebBrowser.openAuthSessionAsync(
          data.url,
          redirectUrl
        );
        if (result.type === "success" && result.url) {
          const {
            data: { user },
            error: userError,
          } = await supabase.auth.getUser();
          if (userError) throw userError;

          if (user) {
            await addUserToSupabase(user);
            dispatch(setUser(user));

            //const hasMainCharacter = await checkMainAvatarExists(user.id);
            // Navigation logic here
          }
        }
      }
    } catch (error) {
      console.error("Error in signInWithGoogle:", error);
      dispatch(
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        )
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { signInWithGoogle, isLoading, user, error };
};

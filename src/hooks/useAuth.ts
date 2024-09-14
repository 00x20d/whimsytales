import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setUser, setLoading, setError } from "../store/slices/authSlice";
import { supabase } from "../lib/supabase";
import { makeRedirectUri } from "expo-auth-session";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const redirectUrl = makeRedirectUri({
    scheme: "whimsytales",
    path: "auth/callback",
  });
  const { user, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );
  const signInWithGoogle = async () => {
    try {
      console.log("Attempting to sign in with Google");
      console.log("Redirect URL:", redirectUrl);
      dispatch(setLoading(true));
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: redirectUrl,
        },
      });
      if (error) throw error;
      console.log("Google sign-in response:", data);
      if (data?.url) {
        console.log("Opening URL for authentication:", data.url);
        const result = await WebBrowser.openAuthSessionAsync(
          data.url,
          redirectUrl
        );
        if (result.type === "success" && result.url) {
          console.log("Auth session success, URL:", result.url);
          // Extract tokens from URL
          const accessToken = result.url
            .split("access_token=")[1]
            ?.split("&")[0];
          const refreshToken = result.url
            .split("refresh_token=")[1]
            ?.split("&")[0];
          if (accessToken && refreshToken) {
            await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken,
            });
            console.log("Session set successfully");
          } else {
            console.error("Failed to extract tokens from URL");
          }
        } else {
          console.log("Auth session result:", result);
        }
      } else {
        console.log("No URL returned from signInWithOAuth");
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      dispatch(
        setError(error instanceof Error ? error.message : String(error))
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  const signOut = async () => {
    try {
      dispatch(setLoading(true));
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      dispatch(setUser(null));
    } catch (error) {
      dispatch(
        setError(error instanceof Error ? error.message : String(error))
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { user, isLoading, error, signInWithGoogle, signOut };
};

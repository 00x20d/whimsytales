import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setUser, setLoading, setError } from "../store/slices/authSlice";
import { supabase } from "../lib/supabase";
import { makeRedirectUri } from "expo-auth-session";
import { Linking } from "react-native";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const redirectUrl = makeRedirectUri({
    scheme: "whimsytales.app",
    path: "auth/callback",
  });
  const { user, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );
  const signInWithGoogle = async () => {
    try {
      console.log("Attempting to sign in with Google");
      dispatch(setLoading(true));
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: redirectUrl + "/auth/callback",
        },
      });
      if (error) throw error;
      console.log("Google sign-in response:", data);
      if (data.url) {
        console.log("Opening URL for authentication:", data.url);
        await Linking.openURL(data.url);
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

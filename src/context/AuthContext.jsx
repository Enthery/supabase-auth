import { createContext, useContext, useState } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);

  // Sign up
  const signUpNewUser = async () => {
    const { data, error } = await supabase.auth.sighUp({
      email: email,
      password: password,
    });
    if (error) {
      console.error("there was a problem signing up:", error);
      return { success: false, error };
    }
    return { success: true, data };
  };

  return (
    <AuthContext.Provider value={{ session, signUpNewUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

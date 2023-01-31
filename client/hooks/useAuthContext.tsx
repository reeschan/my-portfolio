import { AuthContext } from "@/app/Context/authProvider";
import { useContext } from "react";

export default function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
}

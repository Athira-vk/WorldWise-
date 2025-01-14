import { useContext } from "react";
import { AuthContext } from "./FakeAuthContext";

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used ouside AuthProvider");
  return context;
}

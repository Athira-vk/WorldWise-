import { useContext } from "react";
import { CitiesContext } from "./CitiesContexts";

export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outsited the CitiesProdiver");
  return context;
}

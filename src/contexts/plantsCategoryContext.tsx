import { createContext } from "react";
import { contents } from "@/types/api/plantsCategoryType";

export const plantsCategoryContext = createContext<{
  plantsCategory: contents[];
  setPlantsCategory: (category: contents[]) => void;
}>({
  plantsCategory: [],
  setPlantsCategory: () => { },
})
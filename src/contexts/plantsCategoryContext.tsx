import { createContext } from "react";
import { plantsCategoryContents } from "@/types/api/plantsCategoryType";

export const plantsCategoryContext = createContext<{
  plantsCategory: plantsCategoryContents[];
  setPlantsCategory: (category: plantsCategoryContents[]) => void;
}>({
  plantsCategory: [],
  setPlantsCategory: () => { },
})
import { useState, useEffect, useContext } from "react";
import { plantsCategoryContext } from "@/contexts/plantsCategoryContext";
import { plantsCategoryType, plantsCategoryContents } from "@/types/api/plantsCategoryType";
import { apiClient } from "@/components/api/apiClient";

export const PlantsCategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [plantsCategory, setPlantsCategory] = useState<plantsCategoryContents[]>([])
  const value = { plantsCategory, setPlantsCategory }

  useEffect(() => {
    const fetchData = async () => {
      const response: plantsCategoryType = await apiClient.get({ endpoint: "plants_category" });
      setPlantsCategory(response.contents);
    };

    fetchData();
  }, []);

  return <plantsCategoryContext.Provider value={value}>{children}</plantsCategoryContext.Provider>
}

export const usePlantsCategory = () => {
  const context = useContext(plantsCategoryContext);
  if (!context) {
    throw new Error("usePlantsCategory は PlantsCategoryProvider 内で使用してください");
  }
  return context;
};
import { getCategoriesApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  const { data, isloading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });

  
  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isloading, categories, transformedCategories };
}

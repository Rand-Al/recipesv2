import { create } from "zustand";

export const useRecipes = create((set, get) => ({
  recipes: [],
  selectedRecipes: [],
  currentPage: 5,
  fetch: async () => {
    const { currentPage } = get();
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=15`
    );
    const data = await response.json();
    set({
      recipes: data.map((rec) => {
        return { ...rec, isSelected: false };
      }),
    });
  },
  setSelected: (recipe) => {
    set((state) => ({
      recipes: state.recipes.map((rec) => {
        if (rec.id === recipe.id) {
          if (rec.isSelected === false) {
            set((state) => ({
              selectedRecipes: [...state.selectedRecipes, recipe],
            }));
            return { ...rec, isSelected: true };
          } else {
            set((state) => ({
              selectedRecipes: state.selectedRecipes.filter(
                (rec) => recipe.id !== rec.id
              ),
            }));
            return { ...rec, isSelected: false };
          }
        } else {
          return rec;
        }
      }),
    }));
  },
  deleteSelected: () => {
    set((state) => ({
      recipes: state.recipes.filter((rec) => rec.isSelected !== true),
    }));
  },
}));

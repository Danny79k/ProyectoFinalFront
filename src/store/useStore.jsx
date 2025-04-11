import { create } from "zustand";

export const useUtilityMenu = create((set) => ({
  menuOpen: false,
  isDarkMode: true,


  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
}));

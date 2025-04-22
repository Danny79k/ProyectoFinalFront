import { create } from "zustand";

export const useUtilityMenu = create((set) => ({
  menuOpen: false,
  isDarkMode: false,


  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
}));


export const useFormStore = create((set) => ({
  step : 3,

  setStep: (step) => set({ step }),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
}));
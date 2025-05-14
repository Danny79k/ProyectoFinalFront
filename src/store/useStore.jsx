import { create } from "zustand";

const getInitialDarkMode = () => {
  const stored = localStorage.getItem('isDarkMode');
  return stored ? JSON.parse(stored) : false;
};

export const useUtilityMenu = create((set) => ({
  menuOpen: false,
  isDarkMode: getInitialDarkMode(),

  toggleTheme: () =>
    set((state) => {
      const newMode = !state.isDarkMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode));
      return { isDarkMode: newMode };
    }),

  toggleMenu: () =>
    set((state) => ({ menuOpen: !state.menuOpen })),
}));


export const useFormStore = create((set) => ({
  step: 1,
  email: "",
  username: "",
  password: "",
  passwordConfirmation: "",
  termsAccepted: false,

  setStep: (step) => set({ step }),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),

  setEmail: (email) => set({ email }),
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
  setPasswordConfirmation: (passwordConfirmation) =>
    set({ passwordConfirmation }),
  setTermsAccepted: (termsAccepted) => set({ termsAccepted }),

  
}));

export const useNewsStore = create((set) => ({
  selectedNews: null,
  setSelectedNews: (news) => set({ selectedNews: news }),
}));


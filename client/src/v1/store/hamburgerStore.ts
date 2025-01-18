import { create } from "zustand";

interface HamburgerStore {
  menuStatus: boolean;
  toggleMenu: () => void;
}

const hamburgerStore = create<HamburgerStore>((set) => ({
  menuStatus: false,
  toggleMenu: () => set((state) => ({ menuStatus: !state.menuStatus })),
}));

export default hamburgerStore;

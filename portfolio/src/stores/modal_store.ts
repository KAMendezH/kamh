// ZUSTAND
import { create } from "zustand";

// TYPES
import type { useModalStoreTypes } from "../types/types";

const useModalStore = create<useModalStoreTypes>(set => ({
    state: false,
    openModal: () => set({
        state: true
    }),
    closeModal: () => set({
        state: false
    })
}));

export default useModalStore;
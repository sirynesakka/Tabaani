
import { create } from "zustand"

const useRentmodal = create(set => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))

export default useRentmodal; 

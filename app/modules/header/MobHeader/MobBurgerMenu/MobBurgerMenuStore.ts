import { create } from 'zustand'

interface MobBurgerMenuState {
  show: boolean
  handleClose: () => void
  handleShow: () => void
  handler: () => void
}

const MobBurgerMenuStore = create<MobBurgerMenuState>((set) => ({
  show: false,
  handleClose: () => set({ show: false }),
  handleShow: () => set({ show: true }),
  handler: () => set((state) => ({ show: !state.show })),
}))

export { MobBurgerMenuStore }

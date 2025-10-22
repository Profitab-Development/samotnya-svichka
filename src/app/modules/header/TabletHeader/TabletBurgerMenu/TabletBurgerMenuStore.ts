import { create } from 'zustand'

interface TabletBurgerMenuState {
  show: boolean
  handleClose: () => void
  handleShow: () => void
  handler: () => void
}

const TabletBurgerMenuStore = create<TabletBurgerMenuState>((set) => ({
  show: false,
  handleClose: () => set({ show: false }),
  handleShow: () => set({ show: true }),
  handler: () => set((state) => ({ show: !state.show })),
}))

export { TabletBurgerMenuStore }

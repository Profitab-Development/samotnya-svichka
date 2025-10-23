import { create } from 'zustand'

interface MobBurgerMenuState {
  show: boolean
  isClosing: boolean
  handleClose: () => void
  handleShow: () => void
  handler: () => void
}

const MobBurgerMenuStore = create<MobBurgerMenuState>((set) => ({
  show: false,
  isClosing: false,
  handleClose: () => {
    set({ isClosing: true })
    setTimeout(() => {
      set({ show: false, isClosing: false })
    }, 500) // 500ms - тривалість анімації
  },
  handleShow: () => set({ show: true, isClosing: false }),
  handler: () => set((state) => ({ 
    show: !state.show, 
    isClosing: state.show ? true : false 
  })),
}))

export { MobBurgerMenuStore }

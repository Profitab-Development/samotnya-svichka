import { create } from 'zustand'

const headerFormStore = create((set) => ({
  show: false,
  handleClose: () => set({ show: false }),
  handleShow: () => set({ show: true }),
  // eslint-disable-next-line
  handler: () => set((state: any) => ({ show: !state.show })),
}))

export { headerFormStore }

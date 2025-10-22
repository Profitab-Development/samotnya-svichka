import { create } from 'zustand'

interface PopUpState {
  show: boolean
  service: string
  handleClose: () => void
  handleShow: () => void
  changeService: (service: string) => void
}

const popUpStore = create<PopUpState>((set) => ({
  show: false,
  service: '',
  handleClose: () => set({ show: false }),
  handleShow: () => set({ show: true }),
  changeService: (service: string) => set({ service }),
}))

export { popUpStore }

// const show = popUpStore((state) => state.show)
// const service = popUpStore((state) => state.service)
// const handleClose = popUpStore((state) => state.handleClose)
// const handleShow = popUpStore((state) => state.handleShow)
// const changeService = popUpStore((state) => state.changeService)

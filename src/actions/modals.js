import { SHOW_MODAL, HIDE_MODAL } from '../constants'
export const showModal = ({modalProps, modalType}) => {
  return {
    type: SHOW_MODAL,
    modalProps,
    modalType
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
}

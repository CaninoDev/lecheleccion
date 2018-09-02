/* Credit to Esterh Falayi for this walkthrough
https://medium.com/backticks-tildes/creating-a-modal-component-the-redux-way-cf9f4c5497dd
*/

import { SHOW_MODAL, HIDE_MODAL } from '../constants'

const initialState = {
  modalType: null,
  modalProps: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state,
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type
      }
    case HIDE_MODAL:
      return { ...state,
        modalProps: {
          open: false
        }
      }
    default:
      return state
  }
}

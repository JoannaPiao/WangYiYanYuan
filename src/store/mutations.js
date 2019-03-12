import {RECEIVE_CATEGORYL1LIST,RECEIVE_CATEGORYL2LIST} from './mutation-types'

export default {
  [RECEIVE_CATEGORYL1LIST] (state, list) {
    state.list = list
  },
  [RECEIVE_CATEGORYL2LIST] (state, categorys) {
    state.categorys = categorys
  }
}

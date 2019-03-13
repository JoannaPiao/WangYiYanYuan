import {reqCategoryL1List, reqCategoryL2List,reqInitSearch} from '../api'
import {RECEIVE_CATEGORYL1LIST, RECEIVE_CATEGORYL2LIST,RECEIVE_SEARCHLIST} from './mutation-types'

export default {
  async getCategoryL1List ({commit}) {
    //发送ajax请求
    const result = await reqCategoryL1List()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORYL1LIST, result.data)
    }
  },

  async getCategoryL2List ({commit}) {
    //发送ajax请求
    const result = await reqCategoryL2List()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORYL2LIST, result.data)
    }
  },

  async getSearchList ({commit}) {
    //发送ajax请求
    const result = await reqInitSearch()
    if (result.code === '200') {
      commit(RECEIVE_SEARCHLIST, result.data)
    }

  }
}

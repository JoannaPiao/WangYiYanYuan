import Mock from 'mockjs'
import fen_lei from './fenlei_zhuanqu.json'

//提供currentCategory接口
Mock.mock('/currentCategory', {
  code: 0,
  data: fen_lei.currentCategory
})

//提供categoryGroupList接口
Mock.mock('/categoryGroupList', {
  code: 0,
  data: fen_lei.categoryGroupList
})

//提供categoryL1List接口
Mock.mock('/categoryL1List', {
  code: 0,
  data: fen_lei.categoryL1List
})

//提供categoryL2List接口
Mock.mock('/categoryL2List', {
  code: 0,
  data: fen_lei.categoryL2List
})

//不需要编码向外暴露

console.log('mock.....');

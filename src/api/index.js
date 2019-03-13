/*
包含n个接口请求的函数模块
函数返回promise对象
 */

import ajax from './ajax'

const prefix = '/api'
export const reqCurrentCategory = () => ajax('/currentCategory')
export const reqCategoryGroupList = () => ajax('/categoryGroupList')
export const reqCategoryL1List = () => ajax('/categoryL1List')
export const reqCategoryL2List = () => ajax('/categoryL2List')
export const reqInitSearch = () => ajax(`${prefix}/xhr/search/init.json`, 'POST')

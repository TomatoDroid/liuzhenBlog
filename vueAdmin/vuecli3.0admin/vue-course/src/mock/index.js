import Mock from 'mockjs'
import { getFileList, getFolderList } from './response/data';

Mock.mock(/\/getFileList/,'get',getFileList)
Mock.mock(/\/getFolderList/,'get',getFolderList)

export default Mock
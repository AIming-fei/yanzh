/*
 * @Author: frxi 
 * @Date: 2019-12-25 09:28:11 
 * @Last Modified by: frxi
 * @Last Modified time: 2019-12-25 09:37:56
 */
import axios from '@/utils/axios';
/**
 * 通过id删除省份信息
 * @param {Obiect} param {id:''}
 */
export function deleteProvinceById(param){
    return axios.post('/Province/deleteById',param);
}
/**
 * 查找所有省份信息
 */
export function findAllProvince(){
    return axios.get('/Province/findAll');
}
/**
 * 根据id查询省份信息
 * @param {Object} param {id:''}
 */
export function findProvinceById(param){
    return axios.get('/Province/findById',{params:param});
}
/**
 * 新增修改数据
 * @param {Object} param {Scale:''}
 */
export function saveOrUpdateProvince(param){
  return axios.get('/Province/saveOrUpdate',{params:param});
}
/*
 * @Author: frxi 
 * @Date: 2019-12-25 09:28:11 
 * @Last Modified by: frxi
 * @Last Modified time: 2019-12-25 09:34:45
 */
import axios from '@/utils/axios';
/**
 * 通过id删除城市信息
 * @param {Obiect} param {id:''}
 */
export function deleteCityById(param){
    return axios.post('/City/deleteById',param);
}
/**
 * 查找所有城市信息
 */
export function findAllCity(){
    return axios.get('/City/findAll');
}
/**
 * 根据id查询城市信息
 * @param {Object} param {id:''}
 */
export function findCityById(param){
    return axios.get('/City/findById',{params:param});
}

/**
 * 根据省份查询城市信息
 * @param {Object} param {id:''}
 */
export function findCityByProvinceId(param){
  return axios.get('/City/findByProvinceId',{params:param});
}
/**
 * 新增修改数据
 * @param {Object} param {Scale:''}
 */
export function saveOrUpdateCity(param){
  return axios.get('/City/saveOrUpdate',{params:param});
}
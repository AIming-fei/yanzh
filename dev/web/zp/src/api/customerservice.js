/*
 * @Author: frxi 
 * @Date: 2019-12-27 19:01:13 
 * @Last Modified by: frxi
 * @Last Modified time: 2019-12-27 19:17:33
 */
import axios from '@/utils/axios';
/**
 * 通过id删除客服信息
 * @param {Object} param {id:''}
 */
export function deleteCustomerServiceById(param){
    return axios.post('/CustomerService/deleteById',param);
}
/**
 * 查找所有客服信息
 * 
 */
export function findCustomerServiceAll(){
    return axios.get('/CustomerService/findAll');
}
/**
 * 根据状态查询客服信息
 * @param {Object} param {status:''}
 */
export function findCustomerServiceByEducation(param){
    return axios.get('/CustomerService/findByEducation',{params:param});
}
/**
 * 根据性别查询客服信息
 * @param {Object} param {gender:''}
 */
export function findCustomerServiceByGender(param){
    return axios.get('/CustomerService/findByGender',{params:param});
}
/**
 * 根据id查询客服信息
 * @param {Object} param {id:''}
 */
export function findCustomerServiceById(param){
    return axios.get('/CustomerService/findById',{params:param});
}
/**
 * 根据用户名查询客服信息
 * @param {Object} param {username:''}
 */
export function findCustomerServiceByUsername(param){
    return axios.get('/CustomerService/findByUsername',{params:param});
}
/**
 * 新增修改数据
 * @param {Object} param {Scale:''}
 */
export function saveOrUpdateCustomerService(param){
    return axios.get('/CustomerService/saveOrUpdate',{params:param});
}
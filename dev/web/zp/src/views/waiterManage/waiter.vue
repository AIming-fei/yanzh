/*
 * @Author: liuyr 
 * 客服列表页面
 * @Date: 2019-12-23 17:11:53 
 * @Last Modified by: frxi
 * @Last Modified time: 2019-12-27 20:30:21
 */
<template>
  <div class="kefulist">
    <div class="searchDiv">
      <el-select size='mini' v-model="value" placeholder="在线">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select size='mini' v-model="value" placeholder="性别">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="textDiv">当前标准为人</div>
    
  </div>
  
  
</template>

<script>
import {findCustomerServiceByEducation} from "@/api/customerservice.js"
export default {
  data() {
    return {
      //状态
      staus:'',
      //性别
      gender:"",
      //状态数组
      stausData:[],
      //性别数组
      genderData:[],
    };
  },
  computed: {},
  methods: {
    //查询所有客服的状态

  },
  created() {},
  mounted() {}
};
</script>
<style  lang='scss' scoped>
.searchDiv{
  float: left;
}
.textDiv{
  padding-left: 20px;
  float: left;
  // text-align: center;
  margin-top: 6px;
  line-height: 100%;
}
</style>
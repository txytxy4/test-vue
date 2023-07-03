<script setup>
import { computed, ref } from 'vue'
import {userlistStore} from '../../store/userliststate.js'
import { storeToRefs } from 'pinia'
let tableData = userlistStore()
// const {date,naem,address} = storeToRefs(tableData)
tableData = [{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
},
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
    {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  }
]
//搜索绑定
const search = ref('')
//过滤
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
//element发电去
const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}
</script>

<template>
  <!-- <div class="home">这里是首页，首页内容一个查询表单，一个表格，表格有分页</div> -->
  <!-- <el-table :data="filterTableData" style="width: 100%"> -->
  <!-- <el-table :data="tableData" style="width: 100%;"> -->
    <el-table :data="filterTableData" style="width: 100%;">
    <el-table-column label="Date" prop="date" />
    <el-table-column label="Name" prop="name" />
    <el-table-column label="Address" prop="address" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        > -->
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="less" scoped>
.home {
  font-size: 30px;
  color: red;
  margin-top: 100px;
}
</style>



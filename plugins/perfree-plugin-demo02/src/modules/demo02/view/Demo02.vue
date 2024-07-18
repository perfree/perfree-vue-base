<template>
  <div>demo02</div>
  <el-button>Default</el-button>
  <el-button type="primary" @click="openDialog">打开弹窗</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <div>我改了改2222</div>
  <el-alert title="Success alert" type="success" />
  <el-alert title="Info alert" type="info" />
  <el-alert title="Warning alert" type="warning" />
  <el-alert title="Error alert" type="error" />
  
  <img src="@/assets/1689038706902.jpg"  alt=""/>
  <el-dialog v-model="open" title="测试" width="600px" draggable>
    测试
  </el-dialog>
</template>

<script setup>
import {ref} from "vue";

let open = ref(false);


function openDialog() {
  open.value = true;
}
</script>
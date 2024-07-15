<template>
  <div>layout页面</div>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <br>
  <router-link to="/">前往根目录</router-link><br>
  <router-link to="/home">前往home模块home页面</router-link><br>
  <router-link to="/test">前往home模块test页面</router-link><br>
  <router-link to="/tag">前往tag模块tag页面</router-link><br>

  <div>--------子模块---------</div>
  <router-view></router-view>

</template>
<script setup lang="ts">
</script>
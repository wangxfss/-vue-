<template>
  <div class="box">
      {{msg}}
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
      return{
          msg:'单文件组建用着真不错'
      }
  }
}
</script>

<style scoped>
    .box{
        width: 100px;
        height: 100px;
        background-color: peru;
    }
</style>
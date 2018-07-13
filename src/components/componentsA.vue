<!--这是子组件-->

<template>
  <div class="componentsA">
  <h1>{{msg}}</h1>
    <h1>{{msgfromfather}}</h1>
  <button v-on:click="onClickMe">click!</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        msg:"hi",
        tochild:"孩子你好"
      }
    },
    props:['msgfromfather'],
    methods:{
      onClickMe(){
        console.log(this.msgfromfather);
        this.$emit('child-tell-me-something',this.tochild);
        // $emit:触发事件，第二个参数是执行事件时传的参数
        /*事件名不建议使用驼峰式写法，因为html会将方法名转成全部小写，从而无法匹配对应的事件*/
      }
    }
  }
</script>

<style>

</style>

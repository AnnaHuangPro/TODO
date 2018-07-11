<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew()">
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}"
          v-on:click="toggleFinish(item)">{{item.label}}</li>
    </ul>
    <router-view></router-view>
    <!--顶级的外链 用来渲染通过路由映射过来的组件，当路径更改时，这个标签中的内容也会发生更改-->
  </div>
</template>

<script>
  /*会自动生成new Vue({})以下内容就是{}中的参数*/
export default {
  data: function () {
    return {
      title: "this is a todo list",
      items: [],
      newItem:""
    }
  },
  methods:{
    toggleFinish:function(item){
      item.isFinished = !item.isFinished;
    },
    addNew:function(){
      this.items.push({
        label:this.newItem,
        isFinished:false
      });
      this.newItem="";
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .finished{
    text-decoration: underline;
  }
</style>

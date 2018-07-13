<template>
  <div id="app">
    <div id="cover">
      <Header></Header>
      <Todo></Todo>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import ComponentA from './components/componentsA'
  import Store from './store'
  import Header from './todo/header'
  import Footer from './todo/footer'
  import Todo from './todo/todo'
  /*会自动生成new Vue({})以下内容就是{}中的参数*/
export default {
  /*组件要注册了之后才能用*/
  components:{
    Header,
    Footer,
    Todo,
  }
 /* data: function () {
    return {
      title: "this is a todo list",
      items: Store.fetch(),
      newItem:"",
      childWords:""
    }
  },
  components:{ComponentA},/!*组件要先注册再使用，如果没有注册就不能用，而且vue会将ComponentA传成component-a*!/
  watch:{
    items: {
      handler: function (items) {
        Store.save(items);
      },
      deep:true
      /!*深度watcher*!/
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
    },
    listenToMyBoy:function(msg){
      this.childWords = msg/!*都要在data里声明赋值*!/
    },
    deleteAll(){
      Store.deleteALL();
      this.items = ""
    }
  }*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  z-index: -1;
}
.finished{
  text-decoration: underline;
}
#cover{
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  background-color: #999999ab;
  opacity: 0.9;
  z-index: -1;
}

</style>

<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo"
    >
    <Item
      v-bind:todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      @del="deleteTodo"
    />
    <Tabs
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
    />
    <!--v-on:keyup-->
  </section>
</template>

<script>
  /*数据尽量集中，便于管理*/
  import Store from '../store'
  import Item from './item'
  import Tabs from './tabs'
  let id = 0
    export default {
      name: "todo",
      data(){
        return {
          /*数据尽量写在顶层里，数据在哪里声明就在哪里操作，不要在下层组件里操作上层组件的数据，这样容易出错*/
          todos:Store.fetch(),
          filter:'all'
        }
      },
      watch:{
        todos: {
          handler: function (todos) {
            Store.save(todos);
          },
          deep:true
          //深度watcher 监控数据内部的变化
        }
      },
      computed:{
        filteredTodos(){
          if(this.filter === 'all'){
            return this.todos
          }
          const completed = this.filter === 'completed'
          return this.todos.filter(todo => completed === todo.completed )
        }
      },
      methods:{
        addTodo(e){
          this.todos.unshift({
            id:id++,
            content:e.target.value.trim(),
            completed:false
          })
          e.target.value=""
        },
        deleteTodo(id){
            this.todos.splice(this.todos.findIndex(todo => todo.id === id),1)
        },
        toggleFilter(state){
            this.filter = state
        },
        clearAllCompleted(){
          this.todos = this.todos.filter(todo => !todo.completed)
        }
      },
      components:{
        Item,
        Tabs,
      }
    }
</script>

<style scoped>
  .real-app{
    width: 600px;
    margin: 0 auto;
    box-shadow: 0 0 5px #666;
  }
  .add-input{
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    outline: none;
    color: inherit;
    padding: 16px;
    box-shadow: inset 0 0px 2px 0 #ccc;
    box-sizing: border-box;
  }
</style>

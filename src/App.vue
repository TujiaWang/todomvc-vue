<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
				    <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" @keyup.enter="addTodo">
        </header>
        <section class="main">
            <input type="checkbox" class="toggle-all" :checked="allChecked" @change="toggleAll(!allChecked)">
            <ul class="todo-list" v-for="(todo,index) in filterTodo">
                <todo :todo="todo" :index="index"></todo>
            </ul>
        </section>
        <footer class="footer">
            <span class="todo-count">
                <strong>{{remaining}}</strong> items left
            </span>
            <ul class="filters">
                <li><a href="#all" :class="{selected : visibility == 'all'}" @click.parent="visibility = 'all'">All</a></li>
                <li><a href="#active" :class="{selected : visibility == 'active'}" @click.parent="visibility = 'active'">Active</a></li>
                <li><a href="#completed" :class="{selected : visibility == 'completed'}" @click.parent="visibility = 'completed'">Completed</a></li>
            </ul>
            <button class="clear-completed" v-show="todos.length > remaining" @click="clearCompleted">Clear completed</button>
        </footer>
    </section>
</template>

<script>
import Todo from './components/Todo'
import {mapState,mapGetters,mapMutations} from 'vuex'

const filters = {
  all : todos => todos, // 获取所有列表项
  active : todos => todos.filter(todo => !todo.done), // 获取未完成的列表项
  completed : todos => todos.filter(todo => todo.done) // 获取已完成的列表项
}
export default {
  name: 'app',
  data(){
    return {
      visibility : 'all' // 当前的条件
    }
  },
  components: {
    Todo
  },
  computed : {
    ...mapState(['todos']),
    ...mapGetters(['allChecked','remaining']),
    filterTodo(){
      return filters[this.visibility](this.todos);
    }
  },
  methods : {
    ...mapMutations(['toggleAll','clearCompleted']),
    addTodo(e){
      let text = e.target.value.trim();
      if(text){
        this.$store.commit('addTodo',{text});
        e.target.value = '';
      }
    }
  }
}
</script>

<style>

</style>

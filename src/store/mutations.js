export default{
    // 添加列表项
    addTodo(state,{text}){
        state.todos.push({text,done:false});
    },
    // 删除列表项
    delTodo(state,index){
        state.todos.splice(index,1);
    },
    // 改变某一项的完成情况
    toggleTodo(state,index){
        state.todos[index].done = !state.todos[index].done;
    },
    // 改变所有列表项即全选和全不选
    toggleAll(state,done){
        state.todos.forEach(todo => todo.done = done);
    },
    // 清除已完成列表项
    clearCompleted(state){
        state.todos = state.todos.filter(todo => !todo.done);
    },
    updateTodo(state,{text,index}){
        state.todos[index].text = text;
    }
}
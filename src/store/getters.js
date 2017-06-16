export default{
    // 检查是否全部都完成
    allChecked(state){
        return state.todos.every(todo => todo.done);
    },
    // 统计未完成情况
    remaining(state){
        return state.todos.filter(todo => !todo.done).length;
    }
}
export const allTodos = function(state) {
  // return [...state.todos];
  return Object.keys(state.todos).map(id => state.todos[id]);
};

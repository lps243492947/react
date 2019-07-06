export const ADD_TODO = 'ADD_TODO';


export const visibilityType = {
  SHOW_ALL      : 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE   : 'SHOW_ACTIVE'
};

export const addTodo = (text) => ({
  type: ADD_TODO,
  text
});

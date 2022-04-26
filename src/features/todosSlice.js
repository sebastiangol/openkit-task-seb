import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: { value: [] },
  reducers: {
    loadTodos: (state, action) => {
      state.value = action.payload;
    },
    createTodo: (state, action) => {
      state.value.push(action.payload);
    },
    updateTodo: (state, action) => {
      state.value.map(todo => {
        if (todo.todoId === action.payload.todoId) {
          todo.text = action.payload.text;
        }
      });
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter(
        todo => todo.todoId !== action.payload.todoId
      );
    }
  }
});

export const { loadTodos, createTodo, updateTodo, deleteTodo } =
  todosSlice.actions;
export default todosSlice.reducer;

import React from 'react';
import Todo from './Todo';

function TodosList() {
  return (
    <div className="mt-6">
      <h3 className="text-center text-xl m-2 font-bold">List of Todos</h3>
      <div className="flex flex-col items-center mt-4">
        <Todo todoId="68" text="Must do this" />
        <Todo todoId="419" text="Do the other thing." />
      </div>
    </div>
  );
}

export default TodosList;

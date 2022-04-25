import React from 'react';

function CreateTodo() {
  return (
    <div className="">
      <h3 className="text-center text-xl m-2 font-bold">Create a Todo</h3>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Type your todo here..."
          className="input"
        />
        <button className="button bg-amber-600 hover:bg-amber-500 text-lg ml-2">
          Add todo
        </button>
      </div>
    </div>
  );
}

export default CreateTodo;

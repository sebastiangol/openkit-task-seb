import React from 'react';

function Todo({ todoId, text }) {
  return (
    <div className=" m-2 p-2 w-[28rem] border rounded-md shadow-lg">
      {/* Todo top */}
      <div className="flex items-center justify-between">
        <div className="flex w-[20rem]">
          <p className="flex bg-blue-800 rounded-full p-1 border h-8 w-8 justify-center items-center mr-2">
            {todoId}
          </p>
          <p className="flex items-center">{text}</p>
        </div>
        <button className="button text-base bg-red-700 hover:bg-red-600 w-[6.3rem]">
          Delete todo
        </button>
      </div>
      {/* Todo bottom */}
      <div className="flex justify-between mt-3">
        <input
          type="text"
          placeholder="Update todo..."
          className="input w-[19rem]"
        />
        <button className="button text-base bg-cyan-500 hover:bg-cyan-400 w-[6.3rem]">
          Update todo
        </button>
      </div>
    </div>
  );
}

export default Todo;

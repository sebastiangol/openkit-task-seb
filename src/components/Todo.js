import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../features/todosSlice';

function Todo({ todoId, text }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [missing, setMissing] = useState('');

  useEffect(() => {
    setMissing('');
  }, [input]);

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
        <button
          className="button text-base bg-red-700 hover:bg-red-600 w-[6.3rem]"
          onClick={() => dispatch(deleteTodo({ todoId: todoId }))}
        >
          Delete todo
        </button>
      </div>
      {/* Todo bottom */}
      <div className="flex justify-between mt-3">
        <input
          type="text"
          placeholder="Update todo..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="input w-[19rem]"
        />
        <button
          className="button text-base bg-cyan-500 hover:bg-cyan-400 w-[6.3rem]"
          onClick={() =>
            !input.trim()
              ? setMissing('Please enter a todo')
              : dispatch(updateTodo({ todoId: todoId, text: input }))
          }
        >
          Update todo
        </button>
      </div>
      <p className="text-center text-red-500">{missing}</p>
    </div>
  );
}

export default Todo;

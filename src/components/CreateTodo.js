import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTodo } from '../features/todosSlice';

function CreateTodo() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.value);
  const [text, setText] = useState('');
  const [missing, setMissing] = useState('');

  useEffect(() => {
    setMissing('');
  }, [text]);

  return (
    <div className="">
      <h3 className="text-center text-xl m-2 font-bold">Create a Todo</h3>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Type your todo here..."
          value={text}
          onChange={e => setText(e.target.value)}
          className="input"
        />
        <button
          className="button bg-amber-600 hover:bg-amber-500 text-lg ml-2"
          onClick={() => {
            !text.trim()
              ? setMissing('Please enter a todo')
              : !todos.length
              ? dispatch(createTodo({ todoId: 1, text: text })).then(
                  setText('')
                )
              : dispatch(
                  createTodo({
                    todoId: todos[todos.length - 1].todoId + 1,
                    text: text
                  })
                ).then(setText(''));
          }}
        >
          Add todo
        </button>
      </div>
      <p className="text-center text-red-500">{missing}</p>
    </div>
  );
}

export default CreateTodo;

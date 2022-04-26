import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { useSelector, useDispatch } from 'react-redux';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase-config';
import { loadTodos } from '../features/todosSlice';

function TodosList() {
  const todos = useSelector(state => state.todos.value);
  const [loading, setLoading] = useState(true);
  const todosCollectionRef = collection(db, 'todos');
  const dispatch = useDispatch();

  useEffect(() => {
    const getTodos = async () => {
      setLoading(true);
      const data = await getDocs(todosCollectionRef, orderBy('todoId', 'asc'));
      dispatch(loadTodos(data.docs.map(doc => ({ ...doc.data() }))));
      setLoading(false);
    };
    getTodos();
  }, []);

  return (
    <div className="mt-6">
      <h3 className="text-center text-xl m-2 font-bold">List of Todos</h3>
      <div className="flex flex-col items-center mt-4">
        {loading ? (
          <p>LOADING...</p>
        ) : !todos.length ? (
          <p>NO TODOS FOUND.</p>
        ) : (
          todos.map(todo => (
            <Todo key={todo.todoId} todoId={todo.todoId} text={todo.text} />
          ))
        )}
      </div>
    </div>
  );
}

export default TodosList;

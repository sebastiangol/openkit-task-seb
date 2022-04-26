import React from 'react';
import { useSelector } from 'react-redux';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  orderBy
} from 'firebase/firestore';
import { db } from '../firebase-config';

function AppTop() {
  const todos = useSelector(state => state.todos.value);
  const todosCollectionRef = collection(db, 'todos');

  const saveTodos = async () => {
    // delete previous todos save
    const data = await getDocs(todosCollectionRef, orderBy('todoId', 'asc'));
    data.docs.map(async docu => {
      const docRef = doc(db, 'todos', docu.id);
      await deleteDoc(docRef);
    });

    // create new todos save
    todos.map(
      async todo =>
        await addDoc(todosCollectionRef, {
          todoId: todo.todoId,
          text: todo.text
        })
    );
  };

  return (
    <div className="flex flex-col text-3xl font-bold items-center h-fit w-full pt-2 border-b pb-2 ">
      <h1>Openkit Task - Seb</h1>
      <div className="flex justify-between mt-5 w-full">
        <h2 className="m-2 text-2xl">Todo App</h2>
        <button className="button m-2" onClick={() => saveTodos()}>
          Save Todos
        </button>
      </div>
    </div>
  );
}

export default AppTop;

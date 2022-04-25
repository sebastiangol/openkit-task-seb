import React from 'react';

function AppTop() {
  return (
    <div className="flex flex-col text-3xl font-bold items-center h-fit w-full pt-2 border-b pb-2 ">
      <h1>Openkit Task - Seb</h1>
      <div className="flex justify-between mt-5 w-full">
        <h2 className="m-2 text-2xl">Todo App</h2>
        <button className="button m-2">Save Todos</button>
      </div>
    </div>
  );
}

export default AppTop;

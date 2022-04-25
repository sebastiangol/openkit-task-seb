import AppTop from './components/AppTop';
import CreateTodo from './components/CreateTodo';
import TodosList from './components/TodosList';

function App() {
  return (
    <div className="flex flex-col items-center bg-blue-700 w-[33rem] min-h-[calc(100vh-0.6rem)] rounded-lg border shadow-md m-1">
      <AppTop />
      <CreateTodo />
      <TodosList />
    </div>
  );
}

export default App;

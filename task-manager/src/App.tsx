import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodosContextProvider from "./store/todos-context";

const App: React.FC = () => {
  return (
    <TodosContextProvider>
      <div className="todo-container container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center mb-4 mt-4">📝 My To-Do List</h3>
            <NewTodo />
            <TodoList />
          </div>
        </div>
      </div>
    </TodosContextProvider>
  );
}

export default App;
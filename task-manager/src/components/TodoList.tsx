import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../context/TodosActionContext";

const TodoList: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (

        <ul id="taskList" className="list-group">
            {todosCtx.items.map((task) => <TodoItem key={task.id} task={task} changeStatus={todosCtx.toggleStatus} deleteTask={todosCtx.removeTodo} />)}
        </ul>
    );
}

export default TodoList;
import { memo, useCallback } from "react";
import type { Task } from "../models/Task";
import classes from "./TodoItem.module.css";

type Props = {
    task: Task;
    changeStatus: (id: string) => void;
    deleteTask: (id: string) => void;
};

const TodoItemComponent: React.FC<Props> = ({ task, changeStatus, deleteTask }) => {
    const handleClick = useCallback(() => changeStatus(task.id), [changeStatus, task.id]);
    const handleRemove = useCallback(() => deleteTask(task.id), [deleteTask, task.id]);

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {task.taskName}
            <span
                className={`badge rounded-pill p-2 ${classes["cursor-pointer"]} ${task.isCompleted ? "text-bg-success" : "text-bg-danger"
                    }`}
                onClick={handleClick}
                role="button"
                aria-pressed={task.isCompleted}
            >
                {task.isCompleted ? "done" : "pending"}
            </span>
            <span onClick={handleRemove} className={`p-2 ${classes["cursor-pointer"]}`}>x</span>
        </li>
    );
};

export default memo(TodoItemComponent, (prev, next) => {
    return (
        prev.task.id === next.task.id &&
        prev.task.taskName === next.task.taskName &&
        prev.task.isCompleted === next.task.isCompleted
    );
});

import React, { useState, useCallback } from "react";
import type { Task } from "../models/Task";
import { v4 as uuid4 } from "uuid";
import type { TodosContextObj } from "../context/TodosContext";
import { TodosContext } from "../context/TodosActionContext";

const initialTasks = (): Task[] => [
    { id: uuid4(), taskName: "Learn React", isCompleted: false },
    { id: uuid4(), taskName: "Learn TypeScript", isCompleted: false },
    { id: uuid4(), taskName: "Learn Context API", isCompleted: false },
    { id: uuid4(), taskName: "Learn Redux", isCompleted: false },
    { id: uuid4(), taskName: "Learn Router", isCompleted: false },
];

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const [tasks, setTasks] = useState<Task[]>(() => initialTasks());

    const changeStatusHandler = useCallback((id: string) => {
        setTasks((prevStateTasks: Task[]) => prevStateTasks.map((task: Task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
    }, []);

    const newTaskAddHandler = useCallback((taksName: string) => {
        setTasks((prevTasks) => [...prevTasks, { id: uuid4(), taskName: taksName, isCompleted: false }]);
    }, [])

    const removeTaskHandler = useCallback((id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task: Task) => task.id !== id));
    }, [])

    const contextValue: TodosContextObj = {
        items: tasks,
        addTodo: newTaskAddHandler,
        removeTodo: removeTaskHandler,
        toggleStatus: changeStatusHandler
    }

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;
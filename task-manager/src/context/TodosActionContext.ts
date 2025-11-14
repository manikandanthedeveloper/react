import React from "react";
import type { TodosContextObj } from "./TodosContext";

export const TodosContext = React.createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: () => {},
	toggleStatus: () => {},
});

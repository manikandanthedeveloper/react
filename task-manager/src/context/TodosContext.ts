import type { Task } from "../models/Task";

export interface TodosContextObj {
	items: Task[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
	toggleStatus: (id: string) => void;
}

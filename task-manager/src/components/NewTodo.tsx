import { memo, useContext, useRef, type FormEvent } from "react";
import { TodosContext } from "../context/TodosActionContext";


const NewTodo: React.FC = memo(() => {
    const newTaskRef = useRef<HTMLInputElement>(null);
    const todosCtx = useContext(TodosContext);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const enteredText = newTaskRef.current?.value ?? "";
        if (enteredText?.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText?.trim());
        if (newTaskRef.current) newTaskRef.current.value = "";
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="input-group mb-3">
                <input type="text" id="taskInput" className="form-control" placeholder="Add a new task..." ref={newTaskRef} />
                <button id="addBtn" className="btn btn-primary" type="submit">Add</button>
            </div>
        </form>
    )
});

export default NewTodo;
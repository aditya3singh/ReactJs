import { useState } from "react"
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    }
    let updateTodoValue = (e) => {
        setNewTodo(e.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));

    }

    let upperCaseAll = () => {
        setTodos((todos) =>
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    };
    let MarkAll = () => {
        setTodos((todos) =>
            todos.map((todo) => {
                return {
                    ...todo,
                    isDone : true,
                };
            })
        );
    };
    let upperCase1 = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                }
                else {
                    return todo;
                }
            })
        );
    }
    let MarkAsDoneOne = (id) => {
        setTodos((todos) =>
            todos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                }else{
                    return todo;
                }
            })
        );
    }
    return (
        <>
            <input placeholder="write to add" value={newTodo} onChange={updateTodoValue} />
            <button onClick={addNewTask} >Add</button>
            <br></br>
            <br></br>
            <br></br>
            <hr />
            <h4>Task ToDo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                            {todo.task}
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => upperCase1(todo.id)}>Upper</button>
                            <button onClick={() => MarkAsDoneOne(todo.id)}>Done</button>
                        </span>
                    </li>
                ))}
            </ul>

            <button onClick={upperCaseAll}>upper</button>
            <button onClick={MarkAll}>Complete All</button>
        </>
    )
}

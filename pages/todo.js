import * as React from "react";
import produce from "immer";

const App = () => {
    const reducer /*: React.Reducer<State, Action>*/ = (state, action) => {
        switch (action.type) {
            case "add": {
                return produce(state, draft => {
                    draft.todos.push(action.payload);
                });
            }
            case "update": {
                const todoIndex = state.todos.findIndex(
                    todo => todo.id === action.payload.id
                );
                if (todoIndex === -1) return state;
                return produce(state, draft => {
                    draft.todos[todoIndex] = { ...action.payload };
                });
            }
            case "delete": {
                const todoIndex = state.todos.findIndex(
                    todo => todo.id === action.payload.id
                );
                if (todoIndex === -1) return state;
                return produce(state, draft => {
                    draft.todos.splice(todoIndex, 1);
                });
            }
            default: {
                throw new Error(`Unsupported action ${JSON.stringify(action)}`);
            }
        }
    };
    // The reducer defined before
    const [state, dispatch] = React.useReducer(reducer, {
        currentTodo: "",
        todos: []
    });
    const add = () => {
        dispatch({
            type: "add",
            payload: {
                id: nanoid(),
                name: currentTodo,
                completed: false,
                createdAt: `${Date.now()}`
            }
        });
        dispatch({ type: "set-current", payload: "" });
    };
    const edit = (todo /*:Todo*/) => {
        dispatch({ type: "update", payload: todo });
    };
    const del = (todo /*:Todo*/) => {
        dispatch({ type: "delete", payload: todo });
    };
    return (
        <>
            <header>
                <h2>To Do List</h2>
            </header>
            <main>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        add(state.currentTodo);
                    }}
                >
                    <input
                        type="text"
                        value={state.currentTodo}
                        onChange={event => {
                            dispatch({ type: "set-current", payload: event.target.value });
                        }}
                    />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {state.todos.map(todo => {
                        return (
                            <li key={todo.id}>
                                <input
                                    type={"text"}
                                    value={todo.name}
                                    onChange={event => {
                                        edit({ ...todo, name: event.target.value });
                                    }}
                                />
                                <button
                                    onClick={() => {
                                        del(todo);
                                    }}
                                >
                                    Delete
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </>
    );
};
export default App;
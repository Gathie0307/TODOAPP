import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    console.log(todos);
  }

  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            placeholder="Enter the input list"
            className={styles.modernInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
          />
          <button disabled={ todo.name.length < 3 } className={todo.name.length< 3? styles.disabled: styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

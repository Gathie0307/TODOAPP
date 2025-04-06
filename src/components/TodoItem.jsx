import styles from "./todoitem.module.css"
export default function TodoItem ({item, todos, setTodos }){
    function handleDelete (item) {
        console.log("The deleted item", item);
        setTodos(todos.filter((todo) => todo!==item)) 
    }

    function handleClick(name) {
       const newArray = todos.map((list) => list.name === name ? {...list, done: !list.done} : list );
       setTodos(newArray);
    }

    const classNameForItem = item.done ? styles.completed : "";
    return(
        <div className={styles.item}>
        <div className={styles.itemName}>
        <span className= {classNameForItem} onClick={() => handleClick(item.name)}>{item.name} </span>
        <span>
            <button onClick= {() => handleDelete(item)} className={styles.deleteButton}>x</button>
        </span>
        </div>
        <hr className ={styles.line} />
        </div>
    )
}
import styles from "../styles/Todos.module.css";
import Todo from "../components/Todo";

import { ReactSortable } from "react-sortablejs";

export default function TodosContainer({
    todoArray,
    setTodoArray,
    handleComplete,
    handleDelete,
}) {
    return (
        <ul className={styles.container}>
            <ReactSortable
                list={todoArray}
                setList={setTodoArray}
                delayOnTouchOnly={true}
                delay={200}
                animation={300}
            >
                {todoArray.map((item, id) => {
                    return (
                        <Todo
                            key={id}
                            id={item.id}
                            todo={item.todo}
                            handleComplete={handleComplete}
                            handleDelete={handleDelete}
                            isDone={item.isDone}
                        />
                    );
                })}
            </ReactSortable>
        </ul>
    );
}

import Image from "next/image";
import styles from "../styles/Input.module.css";
export default function ToDoInput({ input, handleInputChange, handleAdd }) {
    return (
        <div
            style={{
                textAlign: "center",
            }}
        >
            <h1>TODO</h1>
            <form onSubmit={handleAdd}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Create a new todo..."
                    aria-label="Create a new todo..."
                    value={input}
                    onChange={handleInputChange}
                />
                <button className={styles.submit_btn} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

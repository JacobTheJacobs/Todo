import styles from "../styles/Todo.module.css";

export default function Todo({
    id,
    handleComplete,
    handleDelete,
    todo,
    isDone,
    handleUpdate

}) {
    return (
        <li className={styles.todo} key={id}>
            <div
                onClick={() => handleComplete(id)}
                className={styles.checkboxContainer}
            >
                {isDone ? (
                    <div className={styles.checkbox + " " + styles.checked}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="9"
                        >
                            <path
                                stroke="#FFF"
                                strokeWidth="2"
                                d="M1 4.304L3.696 7l6-6"
                            />
                        </svg>
                    </div>
                ) : (
                    <div className={styles.checkbox}></div>
                )}
            </div>

            {isDone ? (
                <p>
                    <s style={{ opacity: "0.3" }}>{todo}</s>
                </p>
            ) : (
                <>
                
                   <p>{todo}</p>
                  
                </>
            )}

            <div className="btn" onClick={() => handleDelete(id)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 16 16"
                >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </div>
            <div className="btn" onClick={() => handleUpdate(id)}>
            <svg xmlns="http://www.w3.org/2000/svg"
             width="16" 
             height="16"
              viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
            </div>
        </li>
    );
}

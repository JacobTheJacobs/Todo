import Image from "next/image";
import styles from "../styles/Todo.module.css";
import { useState, useEffect } from "react";

export default function Todo({
    id,
    handleComplete,
    handleDelete,
    todo,
    isDone,
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
                                stroke-width="2"
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
        </li>
    );
}
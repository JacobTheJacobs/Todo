import { useState, useEffect } from "react";
import styles from "../styles/Todo.module.css";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Logs({ todoArray, user, todoDb }) {
    return (
        <div>
            <div
                style={{
                    textAlign: "center",
                }}
            >
                <motion.div
                    whileHover={{
                        position: "relative",
                        zIndex: 1,
                        background: "white",
                        scale: 1.06,
                        color: "hotpink",
                        transition: {
                            duration: 4,
                        },
                    }}
                >
                    <h1>Show a list of changes (if any) at any given time</h1>
                </motion.div>

                <motion.div
                    whileHover={{
                        position: "relative",
                        zIndex: 1,
                        background: "white",
                        scale: 1.06,
                        color: "hotpink",
                        transition: {
                            duration: 4,
                        },
                    }}
                >
                    {" "}
                    {user !== false ? (
                        <div>
                            User Session Token: {user?.substring(0, 20)}...
                        </div>
                    ) : null}
                </motion.div>
            </div>
            <div className={styles.log_left}>
                <motion.div
                    whileHover={{
                        position: "relative",
                        zIndex: 1,
                        background: "white",
                        scale: [1, 1.4, 1.2],
                        rotate: [0, 10, -10, 0],
                        transition: {
                            duration: 0.2,
                        },
                    }}
                >
                    {" "}
                    <h3 className={styles.text_title}> LOCAL </h3>
                </motion.div>

                <hr></hr>
                {todoArray?.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <div>id: {todo.id}</div>
                            <span></span>
                            <div
                                style={{
                                    wordBreak: "break-all",
                                }}
                            >
                                {" "}
                                todo: {todo.todo}{" "}
                            </div>
                            <div>isDone: {todo.isDone ? "DONE" : "UNDONE"}</div>
                            <br></br>
                        </div>
                    );
                })}
            </div>

            <div className={styles.log_right}>
                <motion.div
                    whileHover={{
                        position: "relative",
                        zIndex: 1,
                        background: "white",
                        scale: [1, 1.4, 1.2],
                        rotate: [0, 10, -10, 0],
                        transition: {
                            duration: 0.2,
                        },
                    }}
                >
                    {" "}
                    <h3 className={styles.text_title}> DATABASE </h3>
                </motion.div>

                <hr></hr>
                {todoDb?.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <div>id: {todo.id}</div>
                            <span></span>
                            <div
                                style={{
                                    wordBreak: "break-all",
                                }}
                            >
                                {" "}
                                todo: {todo.todo}{" "}
                            </div>
                            <div>isDone: {todo.isDone ? "DONE" : "UNDONE"}</div>
                            <br></br>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

import { useState, useEffect } from "react";
import Todo from "../components/ToDo";
import styles from "../styles/Todo.module.css";
import Head from "next/head";
import { ReactSortable } from "react-sortablejs";
import { motion } from "framer-motion";

export default function Home() {
    //inital todo
    const [todoArray, setTodoArray] = useState([]);
    const [input, setInput] = useState("");
    const [todoInitialized, setTodoInitialized] = useState(false);
    const [isArrayChanged, setIsArrayChanged] = useState(false);
    //updating todo
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(-1);
    //for state showing todo db
    const [todoDb, setTodoDb] = useState([]);

    //fetch data from api
    useEffect(() => {
        if (!todoInitialized) {
            fetch("http://127.0.0.1:8000/todo")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setTodoArray(data);
                    //set data to localStorage
                    localStorage.setItem("todo", JSON.stringify(data));
                    setTodoDb(data);
                })

                .catch((err) => {
                    console.log(err);
                });
        }
        setTodoInitialized(true);
    }, [todoInitialized]);

    useEffect(() => {
        if (todoArray.length > 0) {
            let res = compareArrays();
            setIsArrayChanged(res);
        }
    }, [todoArray]);

    //input changing function
    const handleInputChange = (e) => setInput(e.target.value);

    //add todo to todos array
    const handleAdd = (e) => {
        e.preventDefault();
        if (input) {
            setTodoArray([
                ...todoArray,
                {
                    id: todoArray.length + 1,
                    todo: input,
                    isDone: false,
                },
            ]);
            setInput("");
        }
    };

    //check todo is done
    const handleComplete = (itemID) => {
        todoArray.map((item) => {
            if (item.id === itemID) {
                item.isDone = !item.isDone;
            }
        });
        setTodoArray([...todoArray]);
    };

    //delete todo
    const handleDelete = (itemID) => {
        setTodoArray(todoArray.filter((item) => item.id !== itemID));
    };

    //show todo text in input box
    const handleUpdate = (itemID) => {
        const item = todoArray.find((item) => item.id === itemID);
        console.log(item.todo);
        setInput(item.todo);
        setIsEdit(true);
        setId(itemID);
    };

    //update todo
    const handleUpdateAdd = (e) => {
        e.preventDefault();

        todoArray.map((item) => {
            if (item.id === id) {
                if (!item.isDone) {
                    item.todo = input;
                }
            }
        });
        setTodoArray([...todoArray]);
        setInput("");
        setIsEdit(false);
    };

    const compareArrays = () => {
        const localStorageData = JSON.parse(localStorage.getItem("todo"));
        let flag = false;
        if (localStorageData) {
            if (localStorageData.length !== todoArray.length) {
                console.log(localStorageData.length, todoArray.length);
                return true;
            }
            //compare with liner search (O)n * (O)m
            for (let i = 0; i < localStorageData.length; i++) {
                for (let j = 0; j < todoArray.length; j++) {
                    if (localStorageData[i].id === todoArray[j].id) {
                        if (localStorageData[i].todo !== todoArray[j].todo) {
                            flag = true;
                            break;
                        }
                    }
                }
            }
        }
        return flag;
    };

    const handleSaveLocalChanges = () => {
        //send data back to api
        const data = JSON.stringify(todoArray);
        fetch("http://localhost:8000/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDiscardLocalChanges = () => {
        //get data from localStorage
        const localStorageData = JSON.parse(localStorage.getItem("todo"));
        setTodoArray(localStorageData);
    };

    return (
        <>
            <Head>
                <title>
                    Todo app with ThemeSwitch and localStorage | Next.js and
                    react-sortablejs
                </title>
                <meta
                    name="keywords"
                    content="html, css, javaScript, theme, switch, nextjs, react-sortablejs, localStorage, frontend, mentor, react, todo, app,  front, end"
                />
                <meta
                    name="description"
                    content="This todo app was created using nextjs, sass, react-sortablejs, and localStorage. Challenge by Frontend Mentor."
                />
                <link
                    rel="shortcut icon"
                    type="image/jpg"
                    href="/images/favicon-32x32.png"
                />
            </Head>

            <div
                style={{
                    textAlign: "center",
                    marginBottom: "60px",
                }}
            >
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
                    <h1 style={{ fontSize: "3rem" }}>TODO</h1>
                </motion.div>

                <form onSubmit={isEdit ? handleUpdateAdd : handleAdd}>
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
                <br></br>
                <div>
                    {isArrayChanged ? (
                        <div>
                            {" "}
                            <button
                                className={styles.stateBtn}
                                onClick={handleSaveLocalChanges}
                            >
                                SAVE STATE
                            </button>
                            <button
                                className={styles.stateBtn}
                                onClick={handleDiscardLocalChanges}
                            >
                                DISCARD STATE
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>

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
                            <motion.div
                                key={id}
                                initial="hidden"
                                animate="visible"
                                whileHover={{
                                    scale: 1.01,
                                    transition: {
                                        duration: 0.8,
                                    },
                                }}
                                variants={{
                                    hidden: {
                                        scale: 0.8,
                                        opacity: 0,
                                    },
                                    visible: {
                                        scale: 1,
                                        opacity: 1,
                                        transition: {
                                            delay: 0.4 + id * 0.1,
                                        },
                                    },
                                }}
                            >
                                <Todo
                                    key={id}
                                    id={item.id}
                                    todo={item.todo}
                                    handleComplete={handleComplete}
                                    handleDelete={handleDelete}
                                    isDone={item.isDone}
                                    handleUpdate={handleUpdate}
                                />
                            </motion.div>
                        );
                    })}
                </ReactSortable>
            </ul>

            <div
                style={{
                    textAlign: "center",
                }}
            >
                <h1>Show a list of changes (if any) at any given time</h1>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: "150px",
                    width: "200px",
                    border: "3px solid green",
                    textAlign: "center",
                }}
            >
                <h3> LOCAL </h3>
                <hr></hr>
                {todoArray?.map((todo) => {
                    return (
                        <div>
                            <div>id: {todo.id}</div>
                            <span></span>
                            <div>todo: {todo.todo}</div>
                            <div>isDone: {todo.isDone ? "DONE" : "UNDONE"}</div>
                            <br></br>
                        </div>
                    );
                })}
            </div>

            <div
                style={{
                    position: "absolute",
                    right: "150px",
                    width: "200px",
                    border: "3px solid red",
                    textAlign: "center",
                }}
            >
                <h3> DATABASE </h3>
                <hr></hr>
                {todoDb?.map((todo) => {
                    return (
                        <div>
                            <div>id: {todo.id}</div>
                            <span></span>
                            <div>todo: {todo.todo}</div>
                            <div>isDone: {todo.isDone ? "DONE" : "UNDONE"}</div>
                            <br></br>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

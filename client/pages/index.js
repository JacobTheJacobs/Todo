import { useState, useEffect } from "react";
import styles from "../styles/Todo.module.css";
import Head from "next/head";
import { motion } from "framer-motion";
import Login from "./Login";
import Logs from "./Logs";
import { ReactSortable } from "react-sortablejs";

const URL = "https://django-deploy-jjjjj.herokuapp.com/todo/";
//const URL = "http://localhost:8000/todo/";
export default function Home() {
    //initial todo
    const [todoArray, setTodoArray] = useState([]);
    const [input, setInput] = useState("");
    const [todoInitialized, setTodoInitialized] = useState(false);
    const [isArrayChanged, setIsArrayChanged] = useState(false);
    //updating todo
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(-1);
    //for state showing todo db
    const [todoDb, setTodoDb] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState(false);

    //fetch data from api
    useEffect(() => {
        //get access token from session
        const access_token = sessionStorage.getItem("access_token");
        if (
            !access_token ||
            access_token.length === 0 ||
            access_token === "null" ||
            access_token === "undefined"
        ) {
            //get todo from api
            setModalOpen(true);

            return;
        } else {
            setUser(access_token);
        }

        if (!todoInitialized) {
            fetch(URL)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setTodoArray(data);
                    //set data to localStorage
                    localStorage.setItem("todo", JSON.stringify(data));
                    setTodoDb(data);
                })
                //if something happend retunr error
                .catch((err) => {
                    console.log(err);
                    //redirect to login
                });
        }

        //set initialized to true to stop the insane loop
        setTodoInitialized(true);
    }, [todoInitialized]);

    //for checking against local storage data
    useEffect(() => {
        function fetchBusinesses() {
            if (todoArray.length > 0) {
                let res = compareArrays();
                setIsArrayChanged(res);
            }
        }
        //if array is changed, update localStorage
        fetchBusinesses();
    }, [todoArray]);

    //input changing function
    const handleInputChange = (e) => setInput(e.target.value);

    //add todo to todo array
    const handleAdd = (e) => {
        e.preventDefault();
        //check input update accoordingly
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
            //compare ids to find the item
            if (item.id === itemID) {
                item.isDone = !item.isDone;
            }
        });
        //update array
        setTodoArray([...todoArray]);
        //update the array if changed local storage keep it as it is
        const localStorageData = JSON.parse(localStorage.getItem("todo"));
        setTodoDb(localStorageData);
    };

    // delete todo
    const handleDelete = (itemID) => {
        //alert confirm delete todo
        if (window.confirm("Are you sure you want to delete this todo?")) {
            setTodoArray(todoArray.filter((item) => item.id !== itemID));
        } else {
            return;
        }
    };

    //show todo text in input box at the top
    const handleUpdate = (itemID) => {
        const item = todoArray.find((item) => item.id === itemID);
        //update the input
        setInput(item.todo);
        setIsEdit(true);
        //for updating the todo next function
        setId(itemID);
    };

    //update todo
    const handleUpdateAdd = (e) => {
        e.preventDefault();
        //iterate
        todoArray.map((item) => {
            if (item.id === id) {
                if (!item.isDone) {
                    item.todo = input;
                }
            }
        });
        //update array
        setTodoArray([...todoArray]);
        setInput("");
        //close the input for the update empty it
        setIsEdit(false);
    };

    //for comparing local storage array that we got in the beginning with
    // the current array we have in the state after we changed it or not
    const compareArrays = () => {
        //get the array from local storage
        const localStorageData = JSON.parse(localStorage.getItem("todo"));
        //for checking todo with linear search for the specific todo item
        let flag = false;
        if (localStorageData) {
            //first chekc the lehngth of the arrays reduce complexity i think
            if (localStorageData.length !== todoArray.length) {
                console.log(localStorageData.length, todoArray.length);
                return true;
            }
            //compare with liner search (O)n * (O)m
            for (let i = 0; i < localStorageData.length; i++) {
                for (let j = 0; j < todoArray.length; j++) {
                    if (localStorageData[i].id === todoArray[j].id) {
                        //check first is done property
                        if (
                            localStorageData[i].isDone !== todoArray[j].isDone
                        ) {
                            //updating the value
                            flag = true;
                            //return that we got an changed array
                            break;
                        }
                        //check second todo property
                        if (localStorageData[i].todo !== todoArray[j].todo) {
                            //updating the value
                            flag = true;
                            //return that we got an changed array
                            break;
                        }
                    }
                }
            }
        }
        return flag;
    };

    //saving  local state to DB
    const handleSaveLocalChanges = () => {
        //send data back to api
        const data = JSON.stringify(todoArray);
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })
            //response from api
            .then((res) => {
                return res.json();
            })
            //error
            .catch((err) => {
                console.log(err);
            });
        window.location.reload();
    };

    //Discard changes
    const handleDiscardLocalChanges = () => {
        //get data from localStorage
        const localStorageData = JSON.parse(localStorage.getItem("todo"));
        setTodoArray(localStorageData);
        window.location.reload();
    };

    return (
        <>
            {/*HEAD TAG*/}
            <Head>
                <title>Todo app</title>
                <meta
                    name="keywords"
                    content="html, css, javaScript, theme, switch, nextjs, react-sortablejs, localStorage, frontend, mentor, react, todo, app,  front, end"
                />
            </Head>
            {/*HEAD TAG*/}
            {/*TITLE*/}
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "60px",
                }}
            >
                <Login modalOpen={modalOpen} setModalOpen={setModalOpen} />
                {/*TITLE*/}
                <br></br>
                {/*STATE BUTTONS*/}
                <div>
                    {isArrayChanged ? (
                        <motion.div
                            key={id}
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: 0.9,
                                    opacity: 0,
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.3,
                                    },
                                },
                            }}
                        >
                            {" "}
                            <motion.button
                                whileHover={{
                                    scale: 1.09,
                                    transition: {
                                        duration: 0.8,
                                    },
                                }}
                                className={styles.stateBtn}
                                onClick={handleSaveLocalChanges}
                            >
                                SAVE STATE
                            </motion.button>
                            <motion.button
                                whileHover={{
                                    scale: 1.09,
                                    transition: {
                                        duration: 0.2,
                                    },
                                }}
                                className={styles.stateBtn}
                                style={{
                                    backgroundColor: "hotpink",
                                    opacity: 0.5,
                                }}
                                onClick={handleDiscardLocalChanges}
                            >
                                DISCARD STATE
                            </motion.button>
                        </motion.div>
                    ) : (
                        "State is not changed Yet"
                    )}
                </div>
                {/*STATE BUTTONS*/}
                <br></br>
                {/*INPUT*/}
                <div className={styles.container}>
                    {" "}
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
                </div>

                {/*INPUT*/}
            </div>

            {/*TODO LIST*/}
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
                                {/*todo*/}
                                <li className={styles.todo} key={item.id}>
                                    <div
                                        onClick={() => handleComplete(item.id)}
                                        className={styles.checkboxContainer}
                                    >
                                        {item.isDone ? (
                                            <div
                                                className={
                                                    styles.checkbox +
                                                    " " +
                                                    styles.checked
                                                }
                                            >
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
                                            <div
                                                className={styles.checkbox}
                                            ></div>
                                        )}
                                    </div>

                                    {item.isDone ? (
                                        <p>
                                            <s
                                                style={{
                                                    opacity: "0.3",
                                                }}
                                            >
                                                {item.todo}
                                            </s>
                                        </p>
                                    ) : (
                                        <>
                                            <p
                                                onClick={() =>
                                                    handleUpdate(item.id)
                                                }
                                            >
                                                {item.todo}
                                            </p>
                                        </>
                                    )}

                                    <div
                                        className={styles.deleteBtn}
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="26"
                                                height="26"
                                            >
                                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                {/*todo*/}
                            </motion.div>
                        );
                    })}
                </ReactSortable>
            </ul>
            {/*TODO LIST*/}
            <br></br>

            <hr></hr>
            {/*LOGS*/}
            <Logs user={user} todoArray={todoArray} todoDb={todoDb} />
            {/*LOGS*/}
        </>
    );
}

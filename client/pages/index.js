import { useState, useEffect } from "react";
import ToDoInput from "../components/ToDoInput";
import TodosContainer from "../components/TodosContainer";
import Head from "next/head";

export default function Home() {
    const [todoArray, setTodoArray] = useState([]);
    const [input, setInput] = useState("");
    const [todoInitialized, setTodoInitialized] = useState(false);

    ////////////////////////////////
    //updating todo
    const [isEdit, setIsEdit] = useState(false);
    const [editTodo, setEditTodo] = useState("");

    //fetch data from api
    useEffect(() => {
        if (!todoInitialized) {
            fetch("http://127.0.0.1:8000/todo")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setTodoArray(data);
                })

                .catch((err) => {
                    console.log(err);
                });
        }
        setTodoInitialized(true);
    }, [todoInitialized]);

    //create todo
    const handleInputChange = (e) => setInput(e.target.value);

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
        console.log(todoArray);
    };

    const handleComplete = (itemID) => {
        todoArray.map((item) => {
            if (item.id === itemID) {
                item.isDone = !item.isDone;
            }
        });
        setTodoArray([...todoArray]);
    };

    const handleDelete = (itemID) => {
        setTodoArray(todoArray.filter((item) => item.id !== itemID));
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

            <ToDoInput
                input={input}
                handleInputChange={handleInputChange}
                handleAdd={handleAdd}
            />
            <TodosContainer
                //add
                todoArray={todoArray}
                setTodoArray={setTodoArray}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
            />
        </>
    );
}

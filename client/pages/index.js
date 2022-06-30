import { useState, useEffect } from "react";
import Todo from "../components/ToDo";
import styles from "../styles/Todo.module.css";
import Head from "next/head";
import { ReactSortable } from "react-sortablejs";
import { motion } from 'framer-motion';


export default function Home() {
    //inital todo 
    const [todoArray, setTodoArray] = useState([]);
    const [input, setInput] = useState("");
    const [todoInitialized, setTodoInitialized] = useState(false);
    //updating todo
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(-1);
/*
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
    */

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
        console.log(todoArray);
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
                console.log(item.todo)
                setInput(item.todo);
                setIsEdit(true);
                setId(itemID);

    }

    //update todo
    const handleUpdateAdd = (e) => {
      e.preventDefault();

      todoArray.map((item) => {
        if (item.id === id) {
            if(!item.isDone){
                item.todo = input;
            }
        }
      });
      setTodoArray([...todoArray]);
      setInput("");
      setIsEdit(false);
    }
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
            <motion.div initial="hidden" animate="visible" whileHover={{
  position: 'relative',
  zIndex: 1,
  background: 'white',
  scale: [1, 1.4, 1.2],
  rotate: [0, 10, -10, 0],
  transition: {
    duration: .2
  }
}} variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .4
    }
  },
}}>    <h1 style={{fontSize:'3rem'}}>TODO</h1></motion.div>
        
            <form onSubmit={isEdit ? handleUpdateAdd:handleAdd}>
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
                        <motion.div key={id} className="card" 
                        whileHover={{
                            scale: 1.08,
                            transition: {
                              duration: .8
                            }
                          }}>
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
        </>
    );
}

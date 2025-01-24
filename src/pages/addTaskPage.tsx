import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import AlertPopup from "../utils/alertPopup";

export default function AddTaskPage() {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [limit, setLimit] = useState<string>("");

    useEffect(() => {
        document.title = "Task Manager - Add Task"

        return () => {
            document.title = "Task Manager"
        }
    }, [])

    return (
        <div>
            <h1 className={"flex justify-center items-center mb-6 font-bold text-2xl"}>Add Task</h1>
            <form className={"flex flex-col items-center mx-60 py-6"}>
                <input type="text" placeholder="Title" className={"border-2 rounded-xl p-2 w-96"} value={title}
                       onChange={(e) => setTitle(e.target.value)}/>
                <textarea placeholder="Description" className={"border-2 rounded-xl p-2 w-96 mt-4"} value={description}
                          onChange={(e) => setDescription(e.target.value)}/>
                <input type="date" className={"border-2 rounded-xl p-2 w-96 mt-4"} value={limit}
                       onChange={(e) => setLimit(e.target.value)}/>
                <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.9}}
                    onClick={() => AlertPopup("Task added successfully", "success")}
                    className={"bg-green-500 py-2 px-4 rounded-xl text-white mt-4 w-3/12"}>Add Task
                </motion.button>
            </form>
        </div>
    )
}
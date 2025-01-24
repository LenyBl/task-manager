import {motion} from "framer-motion"
import {FaEdit, FaTrash, FaEye, FaClock, FaCheck} from "react-icons/fa"
import {Link} from "react-router-dom";
import formatDate from "../../utils/formatDate.ts";
import AlertPopup from "../../utils/alertPopup.ts";


export default function TasksList() {

    const tasks: object[] = [
        {
            id: 1,
            title: "Task 1",
            description: "Description 1",
            limit: "2021-12-31",
            status: "pending"
        },
        {
            id: 2,
            title: "Task 2",
            description: "Description 2",
            limit: "2021-12-31",
            status: "completed"
        },
        {
            id: 3,
            title: "Task 3",
            description: "Description 3",
            limit: "2021-12-31",
            status: "pending"
        },
        {
            id: 4,
            title: "Task 4",
            description: "Description 4",
            limit: "2021-12-31",
            status: "completed"
        }
    ]

    return (
        <div>
            <h1 className={"flex justify-center items-center mb-6 font-bold text-2xl"}>Tasks List</h1>
            <div className={"flex items-center mx-60 py-6"}>
                <Link to={"/addTask"}>
                    <motion.button
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.9}}
                        className={"bg-green-500 py-2 px-4 rounded-xl text-white"}>Add Task
                    </motion.button>
                </Link>
            </div>
            <ul>
                {tasks.map((task: any) => {
                    return (
                        <motion.div
                            whileHover={{scale: 1.02}}
                            className={"flex justify-center items-center border-2 rounded-xl mb-6 p-4 mx-60 border-gray-300 shadow hover:bg-gray-200"} key={task.id}>
                            <div className={"flex gap-16 items-center"}>
                                <h2>{task.title}</h2>
                                <p>{task.description}</p>
                                <p>{formatDate(task.limit)}</p>
                                <p>{(task.status == "pending") ? <FaClock className={"text-orange-500"}/> : <FaCheck className={"text-green-500"}/>}</p>
                                <FaEye className={"cursor-pointer"}/>
                                <FaEdit className={"text-blue-600 cursor-pointer"}/>
                                <FaTrash className={"text-red-600 cursor-pointer"} onClick={ () => AlertPopup("Task deleted", "success")}/>
                            </div>
                        </motion.div>
                    )
                })}
            </ul>
        </div>
    )
}
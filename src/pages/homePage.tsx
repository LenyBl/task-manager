import {useEffect} from 'react';
import TasksList from "../components/homeComponents/TasksList.tsx";

export default function HomePage() {

    useEffect(() => {
        document.title = "Task Manager - Home"

        return () => {
            document.title = "Task Manager"
        }
    } , [])

    return (
        <div>
            <TasksList/>
        </div>
    )
}
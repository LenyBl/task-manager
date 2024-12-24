import {useEffect} from "react";
import {motion} from "framer-motion";
import ContactForm from "../components/contactComponents/ContactForm.tsx"


export default function ContactPage() {

    useEffect(() => {
        document.title = "Task Manager - Contact"

        return () => {
            document.title = "Task Manager"
        }
    }, []);

    return (
        <div>
            <ContactForm/>
        </div>
    )
}
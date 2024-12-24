import React from "react";
import {motion} from "framer-motion";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <div className={"container text-xl border-b-2 shadow py-6"}>
                <nav className={"flex justify-between items-center mx-10"}>
                    <h1>Logo</h1>
                    <ul className={"flex gap-12"}>
                        <motion.li
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.9}}
                        ><a href="/">Home</a></motion.li>
                        <motion.li
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.9}}
                        ><a href="/calendar">Calendar</a></motion.li>
                        <motion.li
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.9}}
                        ><a href="/contact">Contact</a></motion.li>
                    </ul>
                    <motion.button
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.9}}
                        className={"bg-red-600 py-2 px-4 rounded-xl text-white"}>Logout
                    </motion.button>
                </nav>
            </div>
            <div className={"mt-10"}>
                {children}
            </div>
            <div>
                <footer className={"container text-center py-6 shadow mt-10"}>
                    <p>Task Manager &copy; 2024</p>
                </footer>
            </div>
        </div>
    )
}
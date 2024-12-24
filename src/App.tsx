import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from "./components/_Layout.tsx";
import Home from './pages/homePage.tsx';
import Calendar from './pages/calendarPage.tsx';
import Contact from './pages/contactPage.tsx';

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Layout children={<Home/>}/>}/>
                <Route path={"/calendar"} element={<Layout children={<Calendar/>}/>}/>
                <Route path={"/contact"} element={<Layout children={<Contact/>}/>}/>
            </Routes>
        </Router>
    )
}



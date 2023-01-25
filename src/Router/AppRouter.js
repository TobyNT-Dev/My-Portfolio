import { Routes, Route } from 'react-router-dom'
import { Footer } from '../Components/Footer/Footer.jsx'
import { NavBar } from '../Components/NavBar/NavBar.jsx'
import { Contact } from '../Pages/Contact/Contact.jsx'
import { Home } from '../Pages/Home/Home.jsx'
import { Projects } from '../Pages/Projects/Projects.jsx'

export const AppRouter = () => {
    return (
        <>
        {/* shows the navigation bar on every page */}
        <NavBar />
        {/* Creates the routes for the links in the NavBar Component */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* shows the footer on every page */}
        <Footer />
        </>
    )
}
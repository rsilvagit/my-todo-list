import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToDoPage } from "../pages/todo/ToDoPage"
import { HomePage } from "../pages/home/HomePage"
import { ErrorPage } from "../pages/error/ErrorPage"
import { Layout } from "../layouts/Layout"

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/todo" element={<ToDoPage />} />
                    <Route path="/todo/:id" element={<ToDoPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </Router>
    )
}
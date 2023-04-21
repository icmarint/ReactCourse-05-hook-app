import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>

            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/login">Login</a>

            <hr />

            

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                {/* <Route path="/*" element={<LoginPage />} /> */}

                <Route path="/*" element={<Navigate to="/about" />} />
            </Routes>
        </>
    )
}

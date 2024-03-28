import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "@/layouts/layout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import AuthCallbackPage from "@/pages/AuthCallbackPage.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route path="/" element={<Layout><HomePage/></Layout>}/>
            <Route path="user-profile" element={<span>USER PROFILE PAGE</span>}/>
            <Route path="*" element={<Navigate to="/" /> }/>
        </Routes>
    )
}

export default AppRoutes;
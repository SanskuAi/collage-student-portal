// MAIN APP ROUTING SETUP

import {BrowserRouter as Router, Routes,Route,Navigate} from 'react-router-dom'
import {useContext } from 'react'
import AuthProvider , {AuthContext} from './context/AuthContext'
import ProtectedRoute from './components/PrtotectedRoute'
import {ROUTES} from './utils/constants'  //all url tkae
import './App.css';

// Pages (will create in Phase 2)
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';
// import Attendance from './pages/Attendance';
// import Grades from './pages/Grades';
// import Courses from './pages/Courses';
// import Fees from './pages/Fees';

function AppContent(){
    const {loading} = useContext(AuthContext);

    if(loading){
        return <div className='loading-screen'>Loading...</div>
    }

    return (
        <Routes>
            {/* AUTH ROUTES PUBLIC */}
            <Route path={ROUTES.LOGIN} element={<div>Login Page PHASE 2</div> } />
            <Route path={ROUTES.REGISTER} element={<div> Registre PHASE-2</div>} />

            {/* LOGGED IN USER */}
            <Route path={ROUTES.DASHBOARD} element ={<ProtectedRoute> <div>DASHBOARD P-3</div> </ProtectedRoute>} />

            <Route path={ROUTES.PROFILE} element={<ProtectedRoute> <div> PROFILE p-4</div></ProtectedRoute>} />

            <Route path={ROUTES.ATTENDANCE} element={<ProtectedRoute> <div> ATTENDANCE p-5</div></ProtectedRoute>} />

            <Route path={ROUTES.GRADES} element={<ProtectedRoute> <div> GRADE p-6</div></ProtectedRoute>} />

            <Route path={ROUTES.COURSES} element={<ProtectedRoute><div>Courses (Coming Phase 7)</div></ProtectedRoute>} />

            <Route path={ROUTES.FEES} element={<ProtectedRoute><div>Fees (Coming Phase 8)</div></ProtectedRoute>} />

            {/* DEAFULT ROUTER */}
            <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} />} />
            
          
            </Routes>
    )
}

export default function App(){
    return (
        <Router>
            <AuthProvider>
        <AppContent />
      </AuthProvider>
        </Router>
            
    )
}
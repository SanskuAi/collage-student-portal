
// PROTECTED ROUTE - Login check

import { Navigate } from "react-router-dom";
import {useContext } from 'react';
import  {AuthContext} from '../context/AuthContext'
import {ROUTES} from '../utils/constants';

export default function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useContext(AuthContext);
  
    if (loading) {
      return <div className="loading-screen">Loading...</div>;
    }
  
    if (!isAuthenticated) {
      return <Navigate to={ROUTES.LOGIN} />;
    }
  
    return children;
  }
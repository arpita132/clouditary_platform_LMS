import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

/**
 * Wraps a route so only authenticated users with the right role can access it.
 * @param {string[]} roles - allowed roles (e.g. ['admin', 'trainer'])
 */
const ProtectedRoute = ({ children, roles = [] }) => {
  const { isAuthenticated, user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 rounded-full border-4 border-sky-500 border-t-transparent animate-spin" />
          <p className="text-slate-500 text-sm font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles.length > 0 && !roles.includes(user?.role)) {
    // Redirect to the appropriate dashboard for their actual role
    const dashboardMap = { admin: '/admin', trainer: '/trainer', student: '/student' };
    return <Navigate to={dashboardMap[user?.role] || '/'} replace />;
  }

  return children;
};

export default ProtectedRoute;

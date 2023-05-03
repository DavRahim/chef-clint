import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    console.log(location);
    if (loading){
        return (
          <div className="w-full h-screen flex justify-center items-center bg-[#0c0c0c]">
            <div
              className="radial-progress text-[#dcca87]"
              style={{
                "--value": "70",
                "--size": "12rem",
                "--thickness": "2px",
              }}
            >
              70%
            </div>
          </div>
        );
    }
      if (user) {
        return children;
      }

    return <Navigate state={{from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoute;
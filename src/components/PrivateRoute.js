import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isloggedIn,children}) => {

if(isloggedIn){
    return children;
}
else{
    return <Navigate to="/login"/>
}

}

export default PrivateRoute
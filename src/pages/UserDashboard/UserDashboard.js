import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {

    const user = useSelector(state => state.user);
    // console.log(user.user.role);
    const navigate = useNavigate();
    useEffect(()=>{
        if(user.user.role === "seller"){
            // console.log("seller");
            navigate('/sellerdash');
        }
    })


  return (
    <div>userDashboard</div>
  )
}

export default UserDashboard
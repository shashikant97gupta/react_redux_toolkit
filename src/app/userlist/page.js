"use client"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUser } from "../redux/slice";

const UserList = () => {

    const dispatch = useDispatch();
    const userApiData = useSelector((data) => data?.userData?.userApiData )
    console.log(userApiData, )

    useEffect(() => {
        dispatch(fetchApiUser())
    }, [])
    return(
        <div>
            <h2>User List Page</h2>
            {userApiData?.length && userApiData.map((itm)=> (
                <div key={itm}><h4>{itm.name}</h4></div>
            ))}
        </div>
    )
}

export default UserList;
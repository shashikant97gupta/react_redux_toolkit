"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeThisUser } from "../redux/slice";

export const DisplayUsers = () => {
    const userData = useSelector((data) => data?.userData?.users);
    const dispatch = useDispatch();
    
    const removeUser = (id) => {
        dispatch(removeThisUser(id))
    }

    return(
        <div className="display-users">
            <h3>
                Users List:
            </h3>
            {
                userData?.length > 0 && userData.map((item) => (
                    <div key={item} className="item-list">
                        <span>{item.name}</span>
                        <button onClick={() => removeUser(item.id)}>Remove</button>
                    </div>
                ))
            }
        </div>        
    )
}
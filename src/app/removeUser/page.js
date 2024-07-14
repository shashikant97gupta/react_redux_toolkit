"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeThisUser } from "../redux/slice";

const RemoveUser = () => {
    const userData = useSelector((data) => data.userData.users );
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
                userData.map((item) => (
                    <div key={item} className="item-list">
                        <span>{item.name}</span>
                        <button onClick={() => removeUser(item.id)}>Remove</button>
                    </div>
                ))
            }
        </div>        
    )
}

export default RemoveUser;
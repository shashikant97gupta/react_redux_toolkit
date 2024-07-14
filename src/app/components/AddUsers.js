"use client"

import { useState } from "react";
import { addTodos, addUsers } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

export const AddUsers = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const userDispatch = () => {
        dispatch(addUsers(name))
        dispatch(addTodos(name))
    }

    return(
        <div className="add-user">
            <h3>
                Add User:
            </h3>
            <div className="form-div">
                <input
                 type="text"
                 placeholder="Add New User"
                 onChange={(e) => setName(e.target.value) } />
                <button
                className="margin-top"
                onClick={userDispatch}
                >Add User
                </button>
                <span className="margin-top"><Link href={'/removeUser'}>Go to remove user page</Link></span>
                <br />
                <span className="margin-top"><Link href={'/userlist'}>Go to User List page</Link></span>
            </div>
        </div>        
    )
}
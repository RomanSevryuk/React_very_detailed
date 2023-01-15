import React from 'react';
import {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return <div>
        {
            props.users.map((el, i) => <div key={i}>{el}</div>)
        }
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Romych', 'Dimych', 'Valera'])
    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
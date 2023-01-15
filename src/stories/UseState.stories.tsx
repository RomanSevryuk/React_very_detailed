import React, {useMemo} from 'react';
import {useState} from "react";

export default {
    title: 'UseState demo'
}

function generateData () {
    console.log('genData')
    return 123456789
}

export const Example1 = () => {
    console.log('Example 1')

    //const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    return <>
        <button onClick={()=>{setCounter(state => state + 1)}}>+</button>
        {counter}
    </>
}
import React, {useState} from 'react';

type ControlledOnOfType = {
    value: boolean
    callBackOnClick: (value: boolean)=>void
}

export const ControlledOnOf = (props: ControlledOnOfType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.value ? "green" : "grey"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.value ? "grey" : "red"
    }
    const lampStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.value ? "green" : "red"
    }

    return (
        <>
            <div style={onStyle} onClick={()=>{props.callBackOnClick(true)}}>On</div>
            <div style={offStyle} onClick={()=>{props.callBackOnClick(false)}}>Off</div>
            <div style={lampStyle}></div>
        </>
    )
}


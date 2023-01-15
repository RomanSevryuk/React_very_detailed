import React, {useState} from 'react';

type UncontrolledOnOfPropsType = {
    onChange: (value: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOf = (props: UncontrolledOnOfPropsType) => {

    let [value, setValue] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: value ? "green" : "grey"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: value ? "grey" : "red"
    }
    const lampStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: value ? "green" : "red"
    }

    const onClicked = () => {
        setValue(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setValue(false)
        props.onChange(false)
    }

    return (
        <>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={lampStyle}></div>
        </>
    )
}


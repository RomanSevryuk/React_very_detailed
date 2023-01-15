import React, {ChangeEvent, useEffect, useState} from 'react';
import {Switch} from "@mui/material";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";
import s from './style/Clock.module.css'

export const getTwoDigitsString = (num: number) => num < 10 ? '0' + num : num

export type ClockType = {
    date: Date
}


const Clock = () => {

    const [date, setDate] = useState(new Date())
    const [checked, setChecked] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("Tick")
            setDate(new Date())
        }, 1000)
        return () => clearInterval(intervalID)
    }, [])

    return (<div className={s.clock}>
            <DigitalClockView date={date}/>
            <label
                className={!checked ? s.showAnalogClockDefault : `${s.showAnalogClockDefault} ${s.showAnalogClockChecked}`}>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{'aria-label': 'controlled'}}
                />
                {!checked ? <b style={{fontSize: '24px'}}>show</b> : <b style={{fontSize: '24px'}}>hide</b>} analog clock
            </label>
            {checked && <AnalogClockView date={date}/>}
        </div>
    );
};

export default Clock;
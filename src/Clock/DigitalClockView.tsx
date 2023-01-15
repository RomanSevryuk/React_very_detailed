import React from 'react';
import {ClockType, getTwoDigitsString} from "./Clock";
import s from './style/Clock.module.css'


export const DigitalClockView: React.FC<ClockType> = ({date, ...restProps}) => {
    return (
        <div className={s.digitalClock}>
            <span>{getTwoDigitsString(date.getHours())} : </span>
            <span>{getTwoDigitsString(date.getMinutes())} : </span>
            <span>{getTwoDigitsString(date.getSeconds())} </span>
        </div>
    );
};
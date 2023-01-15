import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ControlledOnOf} from './ControlledOnOf'
import {ControlledRating, RatingValueType} from "../Rating/ControlledRating";

export default {
    title: 'ControlledOnOf stories',
    component: ControlledOnOf,
}

export const OnMode = () => <ControlledOnOf value={true} callBackOnClick={action('on or off clicked')}/>
export const OffMode = () => <ControlledOnOf value={false} callBackOnClick={action('on or off clicked')}/>
export const ModeChanging = () => {
    const [rating, setValue] = useState(true)
    return <ControlledOnOf value={rating} callBackOnClick={setValue}/>
}

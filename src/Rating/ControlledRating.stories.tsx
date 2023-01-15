import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ControlledRating, RatingValueType} from './ControlledRating'

export default {
    title: 'ControlledRating stories',
    component: ControlledRating,
}

export const EmptyRating = () => <ControlledRating value={0} onClickCallback={x => x}/>
export const Rating1 = () => <ControlledRating value={1} onClickCallback={x => x}/>
export const Rating2 = () => <ControlledRating value={2} onClickCallback={x => x}/>
export const Rating3 = () => <ControlledRating value={3} onClickCallback={x => x}/>
export const Rating4 = () => <ControlledRating value={4} onClickCallback={x => x}/>
export const Rating5 = () => <ControlledRating value={5} onClickCallback={x => x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <ControlledRating value={rating} onClickCallback={setRating}/>
}
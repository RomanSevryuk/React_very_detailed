import React, {} from 'react';

export type RatingValueType =  0 | 1| 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    onClickCallback: (value: RatingValueType)=> void
}

export const ControlledRating = (props: RatingPropsType) => {

    return (
        <div>
            <Star selected={props.value > 0} onClickCallback={props.onClickCallback} valueStar={1}/>
            <Star selected={props.value > 1} onClickCallback={props.onClickCallback} valueStar={2}/>
            <Star selected={props.value > 2} onClickCallback={props.onClickCallback} valueStar={3}/>
            <Star selected={props.value > 3} onClickCallback={props.onClickCallback} valueStar={4}/>
            <Star selected={props.value > 4} onClickCallback={props.onClickCallback} valueStar={5}/>
        </div>
    );
};

export default ControlledRating;
/////////////////////////////////

type StarPropsType = {
    selected: boolean
    onClickCallback: (value: RatingValueType)=>void
    valueStar: RatingValueType
}

const Star = (props: StarPropsType) => {

    return (
        <span onClick={()=>{ props.onClickCallback(props.valueStar) }}>
            {props.selected ? <b>★ </b> : "☆ "}
        </span>
    );
};
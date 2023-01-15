import React, {useState} from 'react';

export type RatingValueType =  0 | 1| 2 | 3 | 4 | 5;
type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const UncontrolledRating = (props: UncontrolledRatingPropsType) => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={ratingValue > 0} setRatingValue={()=>{setRatingValue(1); props.onChange(1)}}/>
            <Star selected={ratingValue > 1} setRatingValue={()=>{setRatingValue(2); props.onChange(2)}}/>
            <Star selected={ratingValue > 2} setRatingValue={()=>{setRatingValue(3); props.onChange(3)}}/>
            <Star selected={ratingValue > 3} setRatingValue={()=>{setRatingValue(4); props.onChange(4)}}/>
            <Star selected={ratingValue > 4} setRatingValue={()=>{setRatingValue(5); props.onChange(5)}}/>
        </div>
    );
};

export default UncontrolledRating;
/////////////////////////////////

type StarPropsType = {
    selected: boolean
    setRatingValue: ()=>void
}

const Star = (props: StarPropsType) => {

    return (
        <span onClick={()=>{ props.setRatingValue() }}>
            {props.selected ? <b>★ </b> : "☆ "}
        </span>
    );
};
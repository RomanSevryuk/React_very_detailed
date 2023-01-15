import './App.css';
import {UncontrolledOnOf} from "./OnOf/UncontrolledOnOf";
import {ControlledOnOf} from "./OnOf/ControlledOnOf";
import {useState} from "react";
import UncontrolledRating from "./Rating/UncontrolledRating";
import ControlledRating, {RatingValueType} from "./Rating/ControlledRating";
import ControlledAccordion from "./Accordion/ControlledAccordion";
import UncontrolledAccordion from "./Accordion/UncontrolledAccordion";

function App() {

    const [onOfValue, setOnOfValue] = useState<boolean>(false)
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)


    return (
        <div className={'App'}>

            <UncontrolledOnOf onChange={setOnOfValue}/>
            <div>{onOfValue.toString()}</div>

            <ControlledOnOf value={onOfValue} callBackOnClick={setOnOfValue}/>

            <UncontrolledRating/>

            <ControlledRating value={ratingValue} onClickCallback={setRatingValue}/>

            <ControlledAccordion title={"Menu"} collapsed={accordionCollapsed} onChangeCollapsed={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }
            }/>

            <UncontrolledAccordion/>

        </div>
    )
}

export default App;
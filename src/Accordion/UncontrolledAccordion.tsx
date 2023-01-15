import React, {useState} from 'react';

export const UncontrolledAccordion = () => {

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div>
            <UncontrolledAccordionTitle
                title={"Menu"}
                onChangeCollapsed={setAccordionCollapsed}
                accordionCollapsed={accordionCollapsed}/>
            {!accordionCollapsed && <AccordionBody/>}
        </div>
    );
};
export default UncontrolledAccordion;


type AccordionTitlePropsType = {
    title: string
    accordionCollapsed: boolean
    onChangeCollapsed: (accordionCollapsed: boolean) => void
}

const UncontrolledAccordionTitle = (props: AccordionTitlePropsType) => {

    const onChangeCollapsedHandler = (accordionCollapsed: boolean) => {
        props.onChangeCollapsed(!accordionCollapsed)
    }

    return (
        <h3 onClick={() => {onChangeCollapsedHandler(props.accordionCollapsed)}}>*** {props.title} ***</h3>
    );
};

const AccordionBody = () => {
    return <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
};
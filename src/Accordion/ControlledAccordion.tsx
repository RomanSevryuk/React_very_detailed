import React from 'react';

type itemType = {
    title: string
    value: any
}

type ControlledAccordionPropsType = {
    title: string
    collapsed: boolean
    onChangeCollapsed: () => void
    items: itemType[]
    onClick: (value: any) => void
}

export const ControlledAccordion = (props: ControlledAccordionPropsType) => {
    return (
        <div>
            <AccordionTitle
                title={props.title}
                onChangeCollapsed={props.onChangeCollapsed}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
};

export default ControlledAccordion;

type AccordionTitlePropsType = {
    title: string
    onChangeCollapsed: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={(e) => props.onChangeCollapsed()}>*** {props.title} ***</h3>
    );
};

type ControlledAccordionBodyPropsType = {
    items: itemType[]
    onClick: (value: any) => void
}

const AccordionBody = (props: ControlledAccordionBodyPropsType) => {
    return <>
        {props.items.map((el, index) => <li key={index} onClick={()=>props.onClick(el.value)}>{el.title}</li>)}
    </>
};
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from './UncontrolledAccordion'

export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
}


export const MenuCollapsedMode = () => <UncontrolledAccordion />
export const UserUncollapsedMode = () => <UncontrolledAccordion />
export const ModeChanging = () => {
    return <UncontrolledAccordion />
}

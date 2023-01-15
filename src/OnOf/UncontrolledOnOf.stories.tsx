import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOf} from './UncontrolledOnOf'

export default {
    title: 'UncontrolledOnOf stories',
    component: UncontrolledOnOf,
}

export const OnMode = () => <UncontrolledOnOf defaultOn={true} onChange={action('on or off clicked')}/>
export const OffMode = () => <UncontrolledOnOf defaultOn={false} onChange={action('on or off clicked')}/>

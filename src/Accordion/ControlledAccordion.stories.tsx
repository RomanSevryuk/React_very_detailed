import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ControlledAccordion} from './ControlledAccordion'

export default {
    title: 'ControlledAccordion stories',
    component: ControlledAccordion,
}

const onClickCallback = action('accordion mode change event fired')

export const MenuCollapsedMode = () => <ControlledAccordion title={'Menu'} collapsed={true}
                                                            onChangeCollapsed={action('accordion mode change event fired')}
                                                            items={[]}
                                                            onClick={action('some item was clicked')}
/>

export const UserUncollapsedMode = () => <ControlledAccordion title={'Menu'} collapsed={false}
                                                              onChangeCollapsed={action('accordion mode change event fired')}
                                                              onClick={action('some item was clicked')}
                                                              items={[{title: 'Romych', value: 1},
                                                                  {title: 'Dimych', value: 2},
                                                                  {title: 'Viktor', value: 3},
                                                                  {title: 'Valera', value: 4},]}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return <ControlledAccordion title={'Users'} collapsed={value}
                                onChangeCollapsed={() => setValue(!value)}
                                onClick={(value)=>{alert(`User with ID ${value} should be happy`)}}
                                items={[{title: 'Romych', value: 1},
                                    {title: 'Dimych', value: 2},
                                    {title: 'Viktor', value: 3},
                                    {title: 'Valera', value: 4},]}
    />
}

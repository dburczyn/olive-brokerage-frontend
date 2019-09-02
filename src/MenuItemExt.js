import React, { Component } from 'react';
import GenericMenuExt from './GenericMenuExt';
import TextMenuExt from './TextMenuExt';
import FileMenuExt from './FileMenuExt';  // import here all future components
export default class MenuItemExt extends Component
{
    constructor(props)
    {
super(props);
        this.state = {
            data: props,
            Tag: this.components[((typeof props.type !== 'undefined' && typeof this.components[props.type]!=='undefined') ? props.type : 'generic')],
        };
    }
    components = {
        textmenus: TextMenuExt,   // insert here all future cmponents
        filemenus: FileMenuExt,
        generic: GenericMenuExt
    };
    render ()
    {
        const { data, Tag } = this.state;
        return (
            <div><Tag data={data} /></div>
        )
    }
}

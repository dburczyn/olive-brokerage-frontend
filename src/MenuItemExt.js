import React, { Component } from 'react';
import TextMenuExt from './TextMenuExt';
import FileMenuExt from './FileMenuExt';  // import here all future components
export default class MenuItemExt extends Component
{
    constructor(props)
    {
super(props);
        this.state = {
            data: props,
            Tag: this.components[(typeof props.type !== 'undefined' ? props.type : 'textmenu')],
        };
    }
    components = {
        textmenu: TextMenuExt,   // insert here all future cmponents
        filemenu: FileMenuExt
    };
    render ()
    {
        const { data, Tag } = this.state;
        return (
            <div><Tag data={data} /></div>
        )
    }
}

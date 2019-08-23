import React, { Component } from 'react';
import TextMenuExt from './TextMenuExt';
import FileMenuExt from './FileMenuExt';
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
        textmenu: TextMenuExt,
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

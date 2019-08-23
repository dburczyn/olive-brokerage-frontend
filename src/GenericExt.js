import React, { Component } from 'react';
import { handleErrors, showError } from './helpers';
import ProjectExt from './ProjectExt';
export default class GenericExt extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            hits: [],
            url: decodeURIComponent(props.match.params.url),
            ep: props.match.params.ep,
            id: props.match.params.id,
            Tag: this.components[(typeof props.match.params.ep !== 'undefined' ? props.match.params.ep : 'Projects')],
            menuitem: props.match.params.menuitem,
            idmenu: props.match.params.idmenu,
            type: 'grid'
        };
    }
    components = {
        Projects: ProjectExt
    };
    componentDidMount ()
    {
        let fbody = {};
        if (localStorage.getItem('token') != null && localStorage.getItem('token') !== "null")
        {
            fbody.headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            };
        }
        fetch(this.state.url + this.state.ep + "/" + this.state.id, fbody)
            .then(handleErrors)
            .then(response => response.json())
            .then(data => this.setState({ hits: data }))
            .catch(err => showError(err))
    }
    render ()
    {
        const { hits, Tag, menuitem, idmenu, url, ep, id, type } = this.state;
        return (
            <div><Tag data={hits} menuitem={menuitem} idmenu={idmenu} url={url} ep={ep} type={type} id={id} /></div>
        )
    }
}

import React, { Component } from 'react';
import { handleErrors, showError } from './helpers';
import ProjectExt from './ProjectExt';  // import here new components if needed
export default class GenericExt extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            grids: props.grids,
            hits: [],
            url: props.match.params.url,
            parsedurl:'',
            ep: props.match.params.ep,
            id: props.match.params.id,
            Tag: this.components[((typeof props.match.params.ep !== 'undefined' && typeof this.components[props.match.params.ep] !== 'undefined') ? props.match.params.ep : 'Projects')],
            menuitem: props.match.params.menuitem,
            idmenu: props.match.params.idmenu,
            type: 'grid'
        };
    }
    components = {
        Projects: ProjectExt,    // add here new components if needed
         }
    componentDidMount ()
    {
        let fbody = {};
        if (localStorage.getItem('token') != null && localStorage.getItem('token') !== "null")
        {
            fbody.headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            };
        }
        if (this.state.grids.length > 0)
        {
            this.state.grids.forEach(griditeminarray =>
            {
                if (typeof griditeminarray.gridurls !== 'undefined' && typeof griditeminarray.name !== 'undefined' && griditeminarray.name === this.state.ep && griditeminarray.gridurls.length > 0)
                {
                    griditeminarray.gridurls.forEach(griditeminarrayurl =>
                    {
                        if (typeof griditeminarrayurl.name !== 'undefined' && griditeminarrayurl.name === this.state.url)
                        {
                            fetch(griditeminarrayurl.url.replace(/\/$/, "") +"/" + this.state.ep + "/" + this.state.id, fbody)
                                .then(handleErrors)
                                .then(response => response.json())
                                .then(data => this.setState({ hits: data, parsedurl:griditeminarrayurl.url }))
                                .catch(err => showError(err))
                        }
                    });
                }
            });
        }
    }
    render ()
    {
        const { hits, Tag, menuitem, idmenu, url, ep, id, type,parsedurl } = this.state;
        return (
            <div><Tag data={hits} menuitem={menuitem} idmenu={idmenu} url={url} parsedurl={parsedurl} ep={ep} type={type} id={id} /></div>
        )
    }
}

import React, { Component } from 'react';
import config from './config';
import Typography from '@material-ui/core/Typography';
import { handleErrors, showError } from './helpers';
var showdown = require('showdown');
showdown.setOption('strikethrough', 'true');
showdown.setOption('simpleLineBreaks', 'true');
showdown.setOption('simplifiedAutoLink', 'true');
showdown.setOption('parseImgDimensions', 'true');
showdown.setOption('tables', 'true');
showdown.setOption('tasklists', 'true');
showdown.setOption('ghCodeBlocks', 'true');
var converter = new showdown.Converter();
const HtmlInner = (props) =>
{
    return (
        <Typography component={'span'} variant={'body2'}>
            <div
                dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(props.data.content)
                }}></div>
        </Typography>
    );
}
export default class Html extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data: [],
            id: (typeof props.match.params.id === 'undefined' ? 1 : props.match.params.id)
        };
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
        fetch(config.htmlurl +"/"+ this.state.id, fbody)
            .then(handleErrors)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
            .catch(err => showError(err))
    }
    render ()
    {
        const { data } = this.state;
        return (
            <div><HtmlInner data={data} /></div>
        )
    }
}

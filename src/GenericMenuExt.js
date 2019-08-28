import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { handleErrors, showError } from './helpers';
export default class GenericMenuExt extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            hits: [],
            item: props.data.item
        };
    }
    componentDidMount ()
    {
        Object.keys(this.state.item).map(key =>
        {
            if (key === 'microservicecall')
            {
                fetch(this.state.item[key].url)
                    .then(handleErrors)
                    .then(response => response.json())
                    .then(data => this.setState({ hits: data }))
                    .catch(err => showError(err))
            }
            return null;
        }
        );
    }
    render ()
    {
        const { hits } = this.state;
        return (
            Object.keys(this.state.item).map(key =>
            {
                if (key !== 'microservicecall')
                {
                    return (
                        <Typography component={'span'} variant={'body2'} key={Math.random()}>
                            <div>
                                {key + ": " + JSON.stringify(this.state.item[key])}
                            </div>
                        </Typography>
                    )
                }
                else
                {
                    return key + ": " + JSON.stringify(hits);
                }
            }
            ))
    }
}
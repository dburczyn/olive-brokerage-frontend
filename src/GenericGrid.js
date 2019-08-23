import React, { Fragment, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Project from './Project';
import { handleErrors, showError } from './helpers';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 200
    }
}));
export default class GenericGrid extends Component
{
    components = {
        Project: Project
    };
    constructor(props)
    {
        super(props);
        this.state = {
            Tag: this.components[(typeof props.location.state !== 'undefined' ? props.location.state.grid.type : 'Project')],
            hits: [],
            grid: props.location.state
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
        if (typeof this.state.grid !== 'undefined')
        {
            this.state.grid.grid.gridurls.forEach(url =>
            {
                if (url.enable === 1)
                {
                    fetch(url.url + this.state.grid.grid.type + "s", fbody)
                        .then(handleErrors)
                        .then(response => response.json())
                        .then(data =>
                        {
                            data.forEach(element =>
                            {
                                element.url = url.url;
                                element.ep = this.state.grid.grid.type;
                            })
                            this.setState(
                                prevState => ({
                                    hits: prevState.hits.concat(data)
                                }
                                )
                            );
                        }
                        )
                        .catch(err => showError(err));
                }
            }
            );
        }
    }
    render ()
    {
        const { hits, Tag } = this.state;
        if (hits.length > 0)
        {
            return <div className={useStyles.root} style={{
                padding: 100
            }}>
                <Grid container spacing={5}>
                    {hits.map(hit => <Fragment key={hit.created_at}>
                        {(hit.id > 0 && hit.visible === 1) ?
                            (<Grid item xs>
                                <Tag item={hit} />
                            </Grid>) : null
                        }
                    </Fragment>)}
                </Grid>
            </div>
        }
        else
            return <div>No data to show</div>
    }
}
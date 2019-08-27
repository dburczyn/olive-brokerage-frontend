import React, { Fragment, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Job from './Job';
import config from './config';
import { handleErrors, showError } from './helpers';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 200
    }
}));
export default class GenericGrid extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            hits: []
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
        config.multirepos.forEach(url =>
        {
            config.jobseps.forEach(EP =>
            {
                fetch(url + EP, fbody)
                    .then(handleErrors)
                    .then(response => response.json())
                    .then(data =>
                    {
                        data.forEach(element =>
                        {
                            element.url = url;
                            element.ep = EP;
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
            });
        });
    }
    render ()
    {
        const { hits } = this.state;
        console.log(hits);
        if (hits.length > 0)
        {
            return <div className={useStyles.root} style={{
                padding: 100
            }}>
                <Grid container spacing={5}>
                    {hits.map(hit => <Fragment key={hit.created_at}>
                        <Grid item xs>
                            <Job
                                name={hit.name}
                                img={config.serverurl + (typeof hit.picture !== 'undefined' ? hit.picture.url : "")}
                                datetype={hit.datetype}
                                created={hit.created_at}
                                updated={hit.updated_at}
                                id={hit.id}
                                url={hit.url}
                                ep={hit.ep}
                            />
                        </Grid>
                    </Fragment>)}
                </Grid>
            </div>
        }
        else
            return <div>No data to show</div>
    }
}
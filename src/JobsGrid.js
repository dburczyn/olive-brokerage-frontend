import React, {Fragment, Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Job from './Job';
import config from './config';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 200
    }
}));

const API = '/jobs';

export default class JobsGrid extends Component
{

    constructor(props) {
        super(props);

        this.state = {
            hits: []
        };
    }

    componentDidMount() {
        let fbody = {};
        if (localStorage.getItem('token') != null && localStorage.getItem('token') !== "null") {
            fbody.headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            };
        }
        fetch(config.serverurl + API, fbody)
            .then(response => response.json())
            .then(data => this.setState({hits: data}));
    }

    render() {

        const {hits} = this.state;

        if (hits.length>0){
        return <div className={useStyles.root} style={{
            padding: 100
        }}>
            <Grid container spacing={5}>
                {hits.map(hit => <Fragment key={hit.id}>
                    <Grid item xs>
                        <Job
                            name={hit.name}
                            img={config.serverurl + (typeof hit.picture !=='undefined' ? hit.picture.url : "")}
                            datetype={hit.datetype}
                            created={hit.created_at}
                            updated={hit.updated_at}
                            id={hit.id}
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
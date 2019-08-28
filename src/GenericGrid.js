import React, { Fragment, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Project from './Project';  // import here all future components
import Job from './Job';  // import here all future components
import Training from './Training';  // import here all future components
import Event from './Event';  // import here all future components
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
        Project: Project,
        Job: Job,
        Training: Training,
        Event: Event
    };
    constructor(props)
    {
        super(props);
        this.state = {
            Tag: this.components[(typeof props.grids.grids[props.match.params.id-1] !== 'undefined' && typeof props.grids.grids[props.match.params.id-1].type !== 'undefined' && typeof this.components[props.grids.grids[props.match.params.id-1].type]!=='undefined' )? props.grids.grids[props.match.params.id-1].type : 'Project'],
            tiles: [],
            grids: props.grids,
            id:props.match.params.id,
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
        if (typeof this.state.grids.grids[this.state.id-1] !== 'undefined' && typeof this.state.grids.grids[this.state.id-1].gridurls !== 'undefined' && this.state.grids.grids[this.state.id-1].gridurls.length>0 )
        {
            this.state.grids.grids[this.state.id-1].gridurls.forEach(url =>
            {
                if (url.enable === 1)
                {
                    fetch(url.url + this.state.grids.grids[this.state.id-1].type + "s", fbody)
                        .then(handleErrors)
                        .then(response => response.json())
                        .then(data =>
                        {
                            data.forEach(element =>
                            {
                                element.url = url.url;
                                element.ep = this.state.grids.grids[this.state.id-1].type;
                            })
                            this.setState(
                                prevState => ({
                                    tiles: prevState.tiles.concat(data)
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
        const { tiles, Tag } = this.state;
           if (tiles.length > 0)
        {
            return <div className={useStyles.root} style={{
                padding: 100
            }}>
                <Grid container spacing={5}>
                    {tiles.map(tile => <Fragment key={tile.created_at}>
                        {(tile.id > 0 && (tile.visible === 1 || typeof tile.visible ==='undefined')) ?
                            (<Grid item xs>
                                <Tag item={tile} type={"grid"} />
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
import React, { Fragment, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Project from './Project';
import Job from './Job';
import Training from './Training';
import Event from './Event';  // import here all future components
import { handleErrors, showError } from './helpers';
import Typography from '@material-ui/core/Typography';
import config from './config';
function hasname (element)
{
    return typeof element.name !== 'undefined' && element.name === this;
}
const getname = (grid) =>
{
    if (grid && typeof grid.grids !== 'undefined' && typeof grid.grids.grids !== 'undefined')
    {
        let type = grid.match.params.id;
        return grid.grids.grids.find(hasname, null, null, null, type);
    }
};
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
            Tag: this.components[(typeof getname(props) !== 'undefined') ? getname(props).type : "Project"],
            tiles: [],
            grids: props.grids,
            id: props.match.params.id,
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
        if (this.state.grids && this.state.grids.length > 0)
        {
            this.state.grids.forEach(griditeminarray =>
            {
                if (typeof griditeminarray !== 'undefined' && typeof griditeminarray.gridurls !== 'undefined' && griditeminarray.gridurls.length > 0 && griditeminarray.name === this.state.id)
                {
                    griditeminarray.gridurls.forEach(url =>
                    {
                        url.url=url + "/";
                        if (url.enable === true || 1)
                        {
                            fetch(url.url + griditeminarray.type + "s", fbody)
                                .then(handleErrors)
                                .then(response => response.json())
                                .then(data =>
                                {
                                    data.forEach(element =>
                                    {
                                        element.url = url.url;
                                        element.ep = griditeminarray.type;
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
            });
        }
    }
    render ()
    {
        const { id, tiles, Tag } = this.state;
        if (tiles.length > 0)
        {
            return <div><Typography component={'span'} style={config.styles.gridtitle} >
                {id}
            </Typography> <div className={useStyles.root} style={{
                padding: 50
            }}>
                    <Grid container spacing={5}>
                        {tiles.map(tile => <Fragment key={tile.created_at}>
                            {(((tile.visible === true || tile.visible === 1) || typeof tile.visible === 'undefined')) ?
                                (<Grid item xs>
                                    <Tag item={tile} type={"grid"} />
                                </Grid>) : null
                            }
                        </Fragment>)}
                    </Grid>
                </div> </div>
        }
        else
            return <div>No data to show</div>
    }
}
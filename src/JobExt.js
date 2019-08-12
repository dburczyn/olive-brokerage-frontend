import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import config from './config';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Work from '@material-ui/icons/Work';
import Mail from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Fab from '@material-ui/core/Fab';
import Reply from '@material-ui/icons/Reply';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    media: {
        height: 200
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    fab: {
        margin: theme.spacing(1)
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));

const Jobinner = (props) => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="lg">
            <div className={classes.paper}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={config.serverurl + (typeof props.data.picture !== 'undefined'
                        ? props.data.picture.url
                        : '')}
                        title="Job Pic"/>
                </CardActionArea>
                <Avatar className={classes.avatar}>
                    <Work/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    {props.data.name}
                </Typography>
                <Typography component={'span'} variant={'body2'}>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: props.data.description
                    }}></div>
                </Typography>

                <Fab variant="extended" aria-label="delete" className={classes.fab}>
                    <Mail className={classes.extendedIcon}/>
                    <a
                        style={{
                        color: 'black',
                        'textDecoration': 'none'
                    }}
                        href={"mailto:" + props.data.email}>Apply</a>
                </Fab>

            </div>
            <Box mt={5}>

                <Link component={RouterLink} underline="none" to='/grid'>

                    <Button variant="contained" size="small" className={classes.button}>
                        <Reply className={classes.extendedIcon}/>
                        Back
                    </Button>

                </Link>
            </Box>
        </Container>
    );

}

export default class JobExt extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            url: props.match.params.number
        };
    }

    componentDidMount() {
        let fbody = {};
        if (localStorage.getItem('token') != null && localStorage.getItem('token') !== "null") {
            fbody.headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            };
        }
        fetch(config.serverurl + "/jobs/" + this.state.url, fbody)
            .then(response => response.json())
            .then(data => this.setState({hits: data}));
    }

    render() {

        const {hits} = this.state;
        return (

            <div><Jobinner data={hits}/></div>

        )
    }
}

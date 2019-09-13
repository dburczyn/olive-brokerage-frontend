import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import config from './config';
const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        maxHeight: 300,
        minWidth: 300,
        minHeight: 300,
    },
    media: {
        height: 100,
    },
});
export default function Training (props)
{
    const classes = useStyles();
    const route = "/"+props.type+"/" + encodeURIComponent(props.item.url) + "/" + props.item.ep + "s/" + props.item.id;
    return (
        <Link underline="none" color="inherit" className={classes.link} component={RouterLink} to={route}  >
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={(typeof props.item.picture !== 'undefined' ? config.serverurl + props.item.picture.url : props.item.AlternatePictureUrl)}
                        title="Training Tile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                            {props.item.name}
                        </Typography>
                        <Typography variant="h6" color="textPrimary" component="p">
                        {"Date: " +new Date(props.item.date).toLocaleString()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {"Created: " +new Date(props.item.date).toLocaleString()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {"Updated: "+new Date(props.item.updated_at).toLocaleString()}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Details
                    </Button>
                </CardActions>
            </Card>
        </Link>
    );
}

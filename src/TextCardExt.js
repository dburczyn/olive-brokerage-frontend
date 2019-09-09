import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

var showdown = require('showdown');
showdown.setOption('strikethrough', 'true');
showdown.setOption('simpleLineBreaks', 'true');
showdown.setOption('simplifiedAutoLink', 'true');
showdown.setOption('parseImgDimensions', 'true');
showdown.setOption('tables', 'true');
showdown.setOption('tasklists', 'true');
showdown.setOption('ghCodeBlocks', 'true');
var converter = new showdown.Converter();

const useStyles = makeStyles(theme => ({
    header: {
      backgroundColor: '#EFF9FF',
    },
  }));


export default function TextMenuExt (props)
{
    const classes = useStyles();
    return (

<Card>
<CardHeader className={classes.header}
  title={props.data.item.name}
/>

<CardContent>
<Typography component={'span'} variant={'body2'}>
            <div
                dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(props.data.item.content)
                }}></div>
        </Typography>
</CardContent>


</Card>
    );
}

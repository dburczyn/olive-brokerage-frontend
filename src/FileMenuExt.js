import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
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
export default function FileMenuExt (props)
{
    return (
        <Card>
            <CardContent>
                <Typography component={'span'} variant={'body2'}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: converter.makeHtml(props.data.item.description)
                        }}></div>
                    {props.data.item.files.map((file) =>
                    {
                        return (<div key={Math.random()}> <a href={props.data.srvurl.replace(/\/$/, "") + file.url} target="_blank" rel="noopener noreferrer" download>{file.name}</a><br /></div>)
                    })}
                </Typography>
            </CardContent>
        </Card>
    );
}

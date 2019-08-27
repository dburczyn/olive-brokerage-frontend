import React from 'react';
import Typography from '@material-ui/core/Typography';
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
        <Typography component={'span'} variant={'body2'}>
            <div
                dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(props.data.item.description)
                }}></div>
            {props.data.item.files.map((file) =>
            {
                return (<div key={Math.random()}> <a href={props.data.srvurl.slice(0, -1) + file.url}  target="_blank" rel="noopener noreferrer" download>{file.name}</a><br /></div>)
            })}
        </Typography>
    );
}

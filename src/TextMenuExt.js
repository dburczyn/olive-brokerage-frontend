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
export default function TextMenuExt (props)
{
    return (
        <Typography component={'span'} variant={'body2'}>
            <div
                dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(props.data.pops.content)
                }}></div>
        </Typography>
    );
}

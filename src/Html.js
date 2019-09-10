import React, { Component } from 'react';
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
const HtmlInner = (props) =>
{
    return (
        <Typography component={'span'} variant={'body2'}>
            <div
                dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(props.data.content)
                }}></div>
        </Typography>
    );
}
export default class Html extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data: (props.htmlpages.htmlpages && props.htmlpages.htmlpages.length > 0 ? props.htmlpages.htmlpages : undefined),
            id: (typeof props.match.params.id === 'undefined' ? 1 : props.match.params.id)
        };
    }
    render ()
    {
        const { data, id } = this.state;
        if (data && data.length > 0)
        {
            function hasname (element)
            {
                return typeof element.name !== 'undefined' && element.name === this;
            }
            const getname = (data) =>
            {
                return data.find(hasname, id, id, id, id);
            };
            const filtereddata = getname(data)
            if (filtereddata && filtereddata.content){
            return (
                <div><HtmlInner data={filtereddata} /></div>
            )
            }
            return <div>no data</div>
        }
        return <div>no data</div>
    }
}

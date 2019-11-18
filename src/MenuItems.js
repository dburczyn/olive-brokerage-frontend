import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import MenuItemExt from './MenuItemExt';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
export default function MenuItems (props)
{
  if (typeof props.projectwithmenus.projectwithmenus !== 'undefined')
  {
    return (
      <div key={Math.random()}>
        {
          (typeof props.projectwithmenus.projectwithmenus.data !== 'undefined' && typeof props.match.params.menuitem === 'undefined') ? (
            <Fragment key={Math.random()}>
              <Card>
                <CardContent style={{ marginTop: '14px', marginBottom: '14px' }}>
                  <Typography component={'span'} variant={'body2'}>{props.projectwithmenus.projectwithmenus.data.description}</Typography>
                </CardContent>
              </Card>            </Fragment>)
            : null
        }
        {
          (Object.keys(props.projectwithmenus.projectwithmenus.data).length > 0) ?
            Object.keys(props.projectwithmenus.projectwithmenus.data).map(hit =>
            {
              if (Array.isArray(props.projectwithmenus.projectwithmenus.data[hit]))
              {
                return (
                  props.projectwithmenus.projectwithmenus.data[hit].map(hit2 =>
                  {
                    return <Fragment key={hit2.created_at}>
                      {
                        (props.match.params.menuitem === hit && ("" + hit2.name) === props.match.params.idmenu) ? (
                          <MenuItemExt type={hit} srvurl={props.projectwithmenus.projectwithmenus.parsedurl} item={hit2} />
                        ) : null
                      }
                    </Fragment>;
                  }
                  )
                )
              }
              return null
            }
            )
            : null
        }
      </div>
    )
  }
  else
  {
    return (<div>NO DATA</div>)
  }
}

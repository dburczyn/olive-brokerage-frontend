import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import MenuItemExt from './MenuItemExt';
export default function MenuItems (props)
{
  if (typeof props.projectwithmenus.projectwithmenus !== 'undefined')
  {
    return (
      <div key={Math.random()}>
        {
          (typeof props.projectwithmenus.projectwithmenus.data !== 'undefined' && typeof props.match.params.menuitem === 'undefined') ? (
            <Fragment key={Math.random()}>
              <Typography>{props.projectwithmenus.projectwithmenus.data.description}</Typography>
            </Fragment>)
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
                          <MenuItemExt type={hit} srvurl={props.projectwithmenus.projectwithmenus.url} item={hit2} />
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

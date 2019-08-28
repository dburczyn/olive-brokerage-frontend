import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import MenuItemExt from './MenuItemExt';
export default function MenuItems (props)
{
  if(typeof props.projectwithmenus.projectwithmenus!=='undefined'){
    return(
  <div key={Math.random()}>
     {
                (typeof props.projectwithmenus.projectwithmenus.data !== 'undefined' && typeof props.match.params.menuitem === 'undefined') ? (
                <Fragment key={Math.random()}>
                  <Typography>{props.projectwithmenus.projectwithmenus.data.description}</Typography>
                </Fragment>)
                : null
            }
              {
                  (Object.keys(props.projectwithmenus.projectwithmenus.data).length  > 0) ?
                      Object.keys(props.projectwithmenus.projectwithmenus.data).map(hit =>
                      {
                        if (Array.isArray(props.projectwithmenus.projectwithmenus.data[hit]))
                        {
                          return (
                            props.projectwithmenus.projectwithmenus.data[hit].map(hit2 =>
                            {

                            return <Fragment key={hit2.created_at}>

                                {
                               (props.match.params.menuitem  === hit && ("" + hit2.id) === props.match.params.idmenu) ?   (
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
                    :    null
                }
{/*
            {
              (typeof props.projectwithmenus.projectwithmenus.data.textmenus !== 'undefined' && props.projectwithmenus.projectwithmenus.data.textmenus.length > 0 && props.match.params.menuitem  === 'textmenus') ? (
                props.projectwithmenus.projectwithmenus.data.textmenus.map(hit => <Fragment key={hit.created_at}>
                  {(hit.visible === 1 && ("" + hit.id) === props.match.params.idmenu) ?
                    (
                      <MenuItemExt type='textmenus' item={hit} /> ) : null
                  }
                </Fragment>)
              ) : null
            }
            {
              (typeof props.projectwithmenus.projectwithmenus.data.filemenus !== 'undefined' && props.projectwithmenus.projectwithmenus.data.filemenus.length > 0 && props.match.params.menuitem === 'filemenus') ? (
                props.projectwithmenus.projectwithmenus.data.filemenus.map(hit => <Fragment key={hit.created_at}>
                  {(hit.visible === 1 && ("" + hit.id) === props.match.params.idmenu) ?
                    (
                      <MenuItemExt type='filemenus' srvurl={props.projectwithmenus.projectwithmenus.url} item={hit} />) : null
                  }
                </Fragment>)
              ) : null
            } */}
  </div>
)
          }
          else{
            return(<div>NO DATA</div>)
          }
}

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
              (typeof props.projectwithmenus.projectwithmenus.data.textmenus !== 'undefined' && props.projectwithmenus.projectwithmenus.data.textmenus.length > 0 && props.match.params.menuitem  === 'textmenu') ? (
                props.projectwithmenus.projectwithmenus.data.textmenus.map(hit => <Fragment key={hit.created_at}>
                  {(hit.visible === 1 && ("" + hit.id) === props.match.params.idmenu) ?
                    (
                      <MenuItemExt type='textmenu' item={hit} /> ) : null
                  }
                </Fragment>)
              ) : null
            }
            {
              (typeof props.projectwithmenus.projectwithmenus.data.filemenus !== 'undefined' && props.projectwithmenus.projectwithmenus.data.filemenus.length > 0 && props.match.params.menuitem === 'filemenu') ? (
                props.projectwithmenus.projectwithmenus.data.filemenus.map(hit => <Fragment key={hit.created_at}>
                  {(hit.visible === 1 && ("" + hit.id) === props.match.params.idmenu) ?
                    (
                      <MenuItemExt type='filemenu' srvurl={props.projectwithmenus.projectwithmenus.url} item={hit} />) : null
                  }
                </Fragment>)
              ) : null
            }
  </div>
)
          }
          else{
            return(<div>NO DATA</div>)
          }
}

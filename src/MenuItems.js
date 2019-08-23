import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';

import MenuItemExt from './MenuItemExt';

export default function MenuItems (props)
{



  if(typeof props.projectin.test.data!=='undefined'){
    return(
  <div key={Math.random()}>
     {

              (typeof props.projectin.test.data.description !== 'undefined' && typeof props.match.params.menuitem === 'undefined') ? (
                <Fragment key={Math.random()}>
                  <Typography>{props.projectin.test.data.description}</Typography>
                </Fragment>)
                : null
            }
            {
              (typeof props.projectin.test.data.textmenus !== 'undefined' && props.projectin.test.data.textmenus.length > 0 && props.match.params.menuitem === 'textmenu') ? (
                props.projectin.test.data.textmenus.map(hit => <Fragment key={hit.created_at}>
                  {(hit.visible === 1 && ("" + hit.id) === props.match.params.idmenu) ?
                    (
                      <MenuItemExt type='textmenu' pops={hit} /> ) : null
                  }
                </Fragment>)
              ) : null
            }
            {
              (typeof props.projectin.test.data.filemenus !== 'undefined' && props.projectin.test.data.filemenus.length > 0 && props.match.params.menuitem === 'filemenu') ? (
                props.projectin.test.data.filemenus.map(hit => <Fragment key={hit.created_at}>
                  {(hit.visible === 1 && ("" + hit.id) === props.match.params.idmenu) ?
                    (
                      <MenuItemExt type='filemenu' srvurl={props.projectin.test.url} pops={hit} />) : null
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

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MenuItems from './MenuItems';


const MenuItemRouter = (projectwithmenus) =>{
    return(
  <div style={{ margin: 100 }}>
    <Switch>
      <Route exact path='/grid/:url/:ep/:id' render={(props) => <MenuItems {...props} projectwithmenus={projectwithmenus} key={Math.random()} />} />
      <Route exact path='/grid/:url/:ep/:id/:menuitem/:idmenu' render={(props) => <MenuItems {...props} projectwithmenus={projectwithmenus} key={Math.random()} />} />
    </Switch>
  </div>
    )
}
    export default MenuItemRouter;
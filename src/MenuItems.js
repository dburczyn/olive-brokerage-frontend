import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MenuItemExt from './MenuItemExt';
const MenuItems = () => (
  <div style={{ margin: 100 }}>
    <Switch>
      <Route exact path='/grid/:url/:ep/:id' component={MenuItemExt} />
      <Route path='/grid/:url/:ep/:id/:menuitem/:menuid' render={(props) => <MenuItemExt {...props} />} />
    </Switch>
  </div>
)
export default MenuItems

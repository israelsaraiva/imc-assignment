import AppPages from 'pages/pages.enum';
import React from 'react';
import { Route } from 'react-router-dom';

export interface RouteConfig {
  path: AppPages;
  component: any;
}

export function configRoutes(routes: Array<RouteConfig>, exact = true) {
  return routes.map((route) => <Route key={route.path} exact={exact} {...route} />);
}

export function groupBy(list: any[], keyGetter: Function) {
  const map = new Map();

  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });

  return map;
}

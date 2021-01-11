import React from 'react';
import { Route } from 'react-router-dom';

import Top from "./Top.js";
import Page01 from "./Page01.js";
import Page02 from "./Page02.js";

function Content() {
  return (
    <div className="content">
      <Switch>
        <Route exact path='/' component={Top} />
        <Route path='/page01' component={Page01} />
        <Route path='/page02' component={Page02} />
      </Switch>
    </div>
  );
}

export default Content;

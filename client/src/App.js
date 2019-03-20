import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import { Container, } from "semantic-ui-react";
import Navbar from './components/Navbar';
import Department from './components/Department';
import DepForm from './components/DepForm'
import DepView from './components/DepView';
import Items from './components/Items'; 




const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/department" component={Department} />
        <Route exact path='/depform/new' component={DepForm}/>
        <Route exact path='/depview/:id' component={DepView}/>
        <Route exact path='/departments/:department_id/items/:id' component={Items}/>
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
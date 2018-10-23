import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ConversationsPanel from './components/ConversationsPanel/ConversationsPanel';
import Services from './components/Services/Services';

import ConversationComponent from './components/ConversationComponent/ConversationComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Grid>
            <Sidebar />
            <Switch>
              <Route path="/inbox" component={ConversationComponent} />
              <Route exact path="/" render={() => <Redirect to="/inbox" />} />
            </Switch>
            <Services />
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;

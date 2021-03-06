import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Services from './components/Services/Services';
import Loader from './components/Loader/Loader';
import Notification from './components/Notification/Notification';

import ConversationComponent from './components/ConversationComponent/ConversationComponent';

class App extends Component {

  state = {
    loading: true
  }

  componentDidMount(props) {
    setTimeout(() => {
      this.setState({loading: false});
    }, 3000)
  }

  render() {

    const {loading} = this.state;
    if (loading) return <Loader />

    return (
      <React.Fragment>
        <Notification />
        <Header />
        <Grid>
          <Sidebar />
          <Switch>
            <Route path="/inbox" component={ConversationComponent} />
            <Route path="/starred" component={ConversationComponent} />
            <Route path="/snoozed" component={ConversationComponent} />
            <Route path="/sent" component={ConversationComponent} />
            <Route path="/draft" component={ConversationComponent} />
            <Route path="/spam" component={ConversationComponent} />
            <Route path="/trash" component={ConversationComponent} />
            <Route exact path="/" render={() => <Redirect to="/inbox" />} />
          </Switch>
          <Services />
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;

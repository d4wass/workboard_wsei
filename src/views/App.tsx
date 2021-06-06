import * as React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'views/Home';
import Entities from 'views/Entities';
import People from 'views/People';
import Publications from 'views/Publications';
import WorkspaceView from 'components/organism/WorkspaceView';
import SiteTemplate from 'templates/SiteTemplate';



const App: React.FC = () => (
  <Router>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/entities" component={Entities} />
        <Route exact path="/people" component={People} />
        <Route exact path="/publications" component={Publications} />
        <Route exact path="/workspace/:id">
          <SiteTemplate>
            <WorkspaceView/>
          </SiteTemplate>
        </Route>
      </Switch>
    </MainTemplate>
  </Router>
)

export default App;

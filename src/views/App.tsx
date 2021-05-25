import * as React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from 'routes/routes';
import Home from 'views/Home';
import Entities from 'views/Entities';
import People from 'views/People';
import Publications from 'views/Publications';


const App: React.FC = () => (
  <Router>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/entities" component={Entities} />
        <Route exact path="/people" component={People} />
        <Route exact path="/publications" component={Publications} />
      </Switch>
    </MainTemplate>
  </Router>
)

export default App;

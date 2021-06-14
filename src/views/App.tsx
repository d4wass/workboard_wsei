import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'views/Home';
import Entities from 'views/Entities';
import People from 'views/People';
import Publications from 'views/Publications';
import ProfileView from 'views/ProfileView';
import WorkspaceView from 'components/organism/WorkspaceView';

const App = () => (
  <Router>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/entities" component={Entities} />
        <Route exact path="/people" component={People} />
        <Route exact path="/publications" component={Publications} />
        <Route exact path="/workspace/:id" component={WorkspaceView} />
        <Route exact path="/profile" component={ProfileView}/>
      </Switch>
    </MainTemplate>
  </Router>
)

export default App;

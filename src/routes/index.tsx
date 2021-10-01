import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import WelcomePage from 'src/pages/WelcomePage';
import AuthenticatedRoutes from './AuthenticatedRoutes';

const AppRouter = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route component={WelcomePage} path="/home" />
      <Route component={AuthenticatedRoutes} path="*" />
    </Switch>
  </Router>
);

export default AppRouter;

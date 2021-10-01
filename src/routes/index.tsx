import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import WelcomePage from 'src/pages/WelcomePage';

const AppRouter = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route component={WelcomePage} path="/home" />
    </Switch>
  </Router>
);

export default AppRouter;

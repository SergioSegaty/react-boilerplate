import { Switch, Route, Redirect } from 'react-router-dom';

const LoggedArea = () => <div>Area Authenticada</div>;

const AuthenticatedRoutes = () => (
  <Switch>
    <Route component={LoggedArea} path="/logged" />
    <Route path="*">
      <Redirect to="/home" />
    </Route>
  </Switch>
);

export default AuthenticatedRoutes;

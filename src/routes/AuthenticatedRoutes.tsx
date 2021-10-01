import { useCallback, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { authenticate } from 'src/shared/utils';

const LoggedArea = () => <div>Area Authenticada</div>;

const AuthenticatedRoutes = () => {
  const history = useHistory();
  const doAuthentication = useCallback(() => {
    if (authenticate() === false) {
      history.replace('/home');
    }
  }, [authenticate]);

  useEffect(() => {
    doAuthentication();
  });

  return (
    <Switch>
      <Route component={LoggedArea} path="/logged" />
      <Route path="*">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

export default AuthenticatedRoutes;

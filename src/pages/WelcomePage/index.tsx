import logo from 'src/logo.svg';
import 'src/App.css';
import { setAuthentication } from 'src/shared/utils';
import { useHistory } from 'react-router-dom';

const WelcomePage = () => {
  const history = useHistory();

  const handleClickLogar = () => {
    setAuthentication();
    history.replace('/logged');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Boilerplate</p>
        <div className="App-link" onClick={handleClickLogar}>
          Logar
        </div>
      </header>
    </div>
  );
};

export default WelcomePage;

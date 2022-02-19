
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserForm from './component/UserForm';
import Pagenotfound from './component/Pagenotfound';
import Record from './component/Record';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/" exact component={UserForm} />
          <Route exact path="/form" component={UserForm} />
          <Route exact path="/table" component={Record} />
          <Route path="*" exact={true} component={Pagenotfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

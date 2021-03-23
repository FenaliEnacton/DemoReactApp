import './App.css';
import { Route, Switch } from 'react-router-dom'
import Greet from './components/greet'
import About from './components/About'
import Contact from './components/Contact'
import Menu from './components/Menu';
import Search from './components/Search';
import Login from './components/Login';
import UserDetail from './components/UserDetail';


function App() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Greet} />
        <Route exact path="/about" render={() => <About name="About" />} />
        <Route exact path="/contact" render={() => <Contact name="Contact" />} />
        <Route exact path="/search" component={() => <Search />} />
        <Route exact path="/login" component={Login} />
        <Route path="/userDetail/:uname" component={UserDetail} />
        <Route exact path="/userDetail" component={UserDetail} />

      </Switch>
    </div>
  );
}

export default App;

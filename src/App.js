import logo from './logo.svg';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import login from "./Pages/login";
import  Dashboard  from './Pages/Dashboard';
import AppMasterForm from './Component/AppMaster/AppMasterForm';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
        
      </Route>
      <Route exact path="/login" component={login}/>
      
      <Route exact path="/AppMasterForm" component={AppMasterForm}/>
    </Switch>
    
  );
}

export default App;

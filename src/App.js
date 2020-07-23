import React from 'react';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import MainPage from './MainPage';

function PrivateRoute({path, component}) {
  const Component = component
  if(localStorage.getItem("authenticated")=="true"){
  return(
    <Component/>    
  )}else{
    return(
    <Redirect to='/login' />)
  }
}

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
        <Route path='/login' exact component={Login}/>
          <PrivateRoute path='/' component={MainPage}/>
          <PrivateRoute path='/mainpage' component={MainPage}/>
        </Switch>
        
    </div>
    </Router>
    
  );
}

export default App;

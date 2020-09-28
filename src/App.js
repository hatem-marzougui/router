import React  from 'react';
import { BrowserRouter as Router, Switch,Route ,Redirect } from 'react-router-dom';

import Nav from './components/Nav' ;
import Login from './components/Login';
import Products from './components/Products';
import Category from './components/Category';
import Home from './components/Home';
import fakeAuth from './components/Login';
import Admin from './components/Admin' ;

function App() {


  return (
    
   
      
        
         <Router>
           <div>
             <Nav/>
         <Switch>
           <Route exact={true} path="/" component={Home}/>
           <Route path="/category" component={Category}/>
           <Route path="/products" component={Products}/>
           <Route path="/login" component={Login} PrivateRoute={PrivateRoute}/>
           <Route path="/admin" component={Admin}/>
           <PrivateRoute authed={fakeAuth.isAuthenticated} path='/admin' component = {Admin} />
           
          
           

           </Switch >
           </div>
           </Router>

      
     
  );
}

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ?  <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}

export default App;

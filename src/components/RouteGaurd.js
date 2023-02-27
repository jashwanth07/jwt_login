import React from 'react';
import { Link, Route} from 'react-router-dom';
 
const RouteGaurd = ({ component: Component, ...rest }) => {
 
   function hasJWT() {
       let flag = false;
 
       //check user has JWT token
       localStorage.getItem("token") ? flag=true : flag=false
      
       return flag
   }
 
   return (
       <Route {...rest}
           render={props => (
               hasJWT() ?
                   <Component {...props} />
                   :
                   <Link to={{ pathname: '/login' }} />
           )}
       />
   );
};
 
export default RouteGaurd;
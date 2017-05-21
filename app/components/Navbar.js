import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

export const Navbar = (props) => {
  console.log('NAV', props);
  return (
    <section id='navBar'>
      <NavLink className='movie-tracker' to='/'>Movie Tracker</NavLink>
      <section>
        <Switch>
          <Route  exact path='/' render={() => {
            // if(loggedIn != undefined) {
            //   return (
            //     <section className='navbar-links'>
            //       <NavLink to='/Favorites' activeClassName='selected'>Favorites</NavLink>
            //       <NavLink to='/Login' activeClassName='selected'>Log Out</NavLink>
            //     </section>
            //   )
            // } else {
              return (
                <section className="navbar-links">
                  <NavLink to='/Login' activeClassName='selected'>Log In</NavLink>
                  <NavLink to='/CreateAccount' activeClassName='selected'>Create Account</NavLink>
                </section>
              )
            // }
          }}/>
          <Route exact path='/loggedIn' render={() => {
            return (
              <section className='navbar-links'>
                <NavLink to='/Favorites' activeClassName='selected'>Favorites</NavLink>
                <NavLink to='/Login' activeClassName='selected'>Log Out</NavLink>
                {/* <NavLink to='/CreateAccount' activeClassName='selected'>Create Account</NavLink> */}
              </section>
            )
          }}/>
          <Route exact path='/Favorites' render={() => {
            return (
              <section className='navbar-links'>
                <NavLink to='/Favorites' activeClassName='selected'>Favorites</NavLink>
                <NavLink to='/Login' activeClassName='selected'>Log Out</NavLink>
                {/* <NavLink to='/CreateAccount' activeClassName='selected'>Create Account</NavLink> */}
              </section>
            )
          }}/>
        </Switch>
      </section>
    </section>
  );
}

{/* <Route path='/' render={() => {
  return(
    <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
    <NavLink to='/Login' activeClassName='selected'>Login</NavLink>
    <NavLink to='/Favorites' activeClassName='selected'>Favorites</NavLink>
    <NavLink to='/CreateAccount' activeClassName='selected'>Create Account</NavLink>
  )
}}/> */}

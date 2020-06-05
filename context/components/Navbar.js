import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContexts'; 
import { AuthContext } from '../contexts/AuthContext';
/* class Navbar extends React.Component {
    //static contextType = ThemeContext;
    render() { 
        //console.log('contextType', this.context)
        // const {isLightTheme, light,  dark} = this.context; 
        // const theme = isLightTheme ? light:dark;
        return (
            <AuthContext.Consumer>{(authcontext) => (
                <ThemeContext.Consumer>{(context) => {
                    console.log('authcontext', authcontext) 
                    const {isAuthenticated, toogleAuth} = authcontext;
                    const {isLightTheme, light,  dark} = context; 
                    const theme = isLightTheme ? light:dark;
                    return(
                        <nav style={{ background:theme.ui, color:theme.synatx }}>
                            <h1>Context App</h1> 
                                <div onClick={toogleAuth}>{isAuthenticated?'Logged IN':'Logged Out'}</div>
                            <ul> 
                                <li>Home</li> 
                                <li>About</li> 
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
    );
  }
}
export default Navbar; */
const Navbar = () => {
    const {isLightTheme, light,  dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light:dark;
    const {isAuthenticated, toogleAuth} = useContext(AuthContext);
    return(
        <nav style={{ background:theme.ui, color:theme.synatx }}>
            <h1>Context App</h1> 
            <div onClick={toogleAuth}>{isAuthenticated?'Logged IN':'Logged Out'}</div>
            <ul> 
                <li>Home</li> 
                <li>About</li> 
                <li>Contact</li>
            </ul>
        </nav>
    )
}
export default Navbar;
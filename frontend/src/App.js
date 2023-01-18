import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Forgot from "./components/Forgot/Forgot";
import Reset from "./components/Forgot/Reset";
import Dashboard from "./components/Dashboard/Dashboard";
import {GoogleOAuthProvider} from '@react-oauth/google';
import Header from "./components/Header/Header";

function App() {


    return (
        <div>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Landing}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/forgot" exact component={Forgot}/>
                        <Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/reset/:token" exact component={Reset}/>

                    </Switch>
                </BrowserRouter>
            </GoogleOAuthProvider>
        </div>
    );
}

export default App;

import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Forgot from "./components/Forgot/Forgot";
import Reset from "./components/Forgot/Reset";

function App() {


    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/forgot" exact component={Forgot}/>
                    <Route path="/reset/:token" exact component={Reset}/>

                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;

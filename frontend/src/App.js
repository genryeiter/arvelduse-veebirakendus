import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './components/Landing/Landing';

function App() {


    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Landing}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;

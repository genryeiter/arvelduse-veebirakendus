import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Header from "./components/Header/Header";
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'
import Dashboard from './components/Dashboard/Dashboard';
import {GoogleOAuthProvider} from '@react-oauth/google';
import SnackbarProvider from 'react-simple-snackbar'

function App() {
    const user = JSON.parse(localStorage.getItem('profile'))

    return (
        <div>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                <BrowserRouter>
                    <SnackbarProvider>
                        {user && <NavBar/>}
                        <Header/>
                        <Switch>
                            <Route path="/" exact component={Landing}/>
                            <Route path="/invoice" exact component={Invoice}/>
                            <Route path="/edit/invoice/:id" exact component={Invoice}/>
                            <Route path="/invoice/:id" exact component={InvoiceDetails}/>
                            <Route path="/invoices" exact component={Invoices}/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/settings" exact component={Settings}/>
                            <Route path="/dashboard" exact component={Dashboard}/>

                        </Switch>
                    </SnackbarProvider>
                </BrowserRouter>
            </GoogleOAuthProvider>
        </div>
    );
}

export default App;

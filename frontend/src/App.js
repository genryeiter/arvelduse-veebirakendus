import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Forgot from "./components/Forgot/Forgot";
import Reset from "./components/Forgot/Reset";
import Dashboard from "./components/Dashboard/Dashboard";
import {GoogleOAuthProvider} from '@react-oauth/google';
import Header from "./components/Header/Header";
import Invoice from "./components/Invoice/Invoice";
import InvoiceDetails from "./components/InvoiceDetails/InvoiceDetails";
import ClientList from "./components/Clients/ClientList";
import Settings from "./components/Settings/Settings";
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer";
import Invoices from "./components/Invoices/Invoices";
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
                            <Route path="/customers" exact component={ClientList}/>
                            <Route path="/forgot" exact component={Forgot}/>
                            <Route path="/reset/:token" exact component={Reset}/>
                            <Redirect exact from="/new-invoice" to="/invoice"/>
                        </Switch>
                        <Footer/>
                    </SnackbarProvider>
                </BrowserRouter>
            </GoogleOAuthProvider>
        </div>
    );
}

export default App;

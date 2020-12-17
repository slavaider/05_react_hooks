import React from 'react'

import Navbar from './components/navbar/navbar'
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Alert from "./components/Alert/Alert";
import AlertState from "./context/Alert/AlertState";
import GithubState from "./context/Github/GithubState";

function App() {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <React.Fragment>
                        <Navbar/>
                        <div className="container pt-4">
                            <Alert/>
                            <Switch>
                                <Route path='/' exact component={Home}/>
                                <Route path='/about' component={About}/>
                                <Route path='/profile/:name' component={Profile}/>
                                <Redirect to='/'/>
                            </Switch>
                        </div>
                    </React.Fragment>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    );
}

export default App;

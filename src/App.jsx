import React from 'react';
import {Route} from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import './App.sass';
import Login from "./components/Login/Login";

const App = (props) => {
    return (
        <div className="outer">
            <HeaderContainer />

            <Navbar />

            <div className="wrapper">
                <Route path="/profile/:userId" render={() => <ProfileContainer /> } />

                <Route path="/dialogs" render={() => <DialogsContainer /> } />

                <Route path="/users" render={() => <UsersContainer /> } />

                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />

                <Route path="/login" component={Login} />
            </div>

            <Footer />
        </div>
    );
}

export default App;

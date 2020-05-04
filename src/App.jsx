import React from 'react';
import {Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import './App.sass';

const App = (props) => {
    return (
        <div className="outer">
            <Header />

            <Navbar />

            <div className="wrapper">
                <Route path="/profile" render={() => {
                    return <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />
                }} />

                <Route path="/dialogs" render={() => {
                    return (
                        <Dialogs
                            dialogsPage={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />
                    );
                }} />

                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>

            <Footer />
        </div>
    );
}

export default App;

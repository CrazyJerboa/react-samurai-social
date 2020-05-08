import React from 'react';
import {Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
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
                <Route path="/profile" render={() => <Profile /> } />

                <Route path="/dialogs" render={() => <DialogsContainer /> } />

                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>

            <Footer />
        </div>
    );
}

export default App;

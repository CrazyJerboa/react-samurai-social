import React from 'react';
import {BrowserRouter, Route, withRouter} from "react-router-dom";

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
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return this.props.initialized ?
            <div className="outer">
                <HeaderContainer/>

                <Navbar/>

                <div className="wrapper">
                    <Route path="/profile/:userId" render={() => <ProfileContainer/>}/>

                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>

                    <Route path="/users" render={() => <UsersContainer/>}/>

                    <Route path="/news" component={News}/> <Route path="/music" component={Music}/> <Route
                    path="/settings" component={Settings}/>

                    <Route path="/login" component={Login}/>
                </div>

                <Footer/>
            </div>
            :
            <Preloader/>;
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

// export default compose(
//     withRouter,
//     connect(mapStateToProps, {initializeApp})
// )(App);

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const SamuraiJSApp = props => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>;
};

export default SamuraiJSApp;
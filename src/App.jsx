import React, {Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import UsersContainer from "./components/Users/UsersContainer";

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
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('Some error occured');
        console.error(promiseRejectionEvent);
    };

    componentDidMount() {
        this.props.initializeApp();

        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }

        return this.props.initialized ?
            <div className="outer">
                <HeaderContainer/>

                <Navbar/>

                <div className="wrapper">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>

                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>

                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>

                        <Route path="/users" render={() => <UsersContainer/>}/>

                        <Route path="/news" component={News}/> <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>

                        <Route path="/login" component={Login}/>

                        <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
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
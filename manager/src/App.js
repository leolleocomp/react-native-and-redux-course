import firebase from 'firebase';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { loggedIn: false };
    } 

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCanRD6xXXNMgdBJzZmDG8R6hKFE5C9vp4",
            authDomain: "manager-d58dc.firebaseapp.com",
            databaseURL: "https://manager-d58dc.firebaseio.com",
            projectId: "manager-d58dc",
            storageBucket: "manager-d58dc.appspot.com",
            messagingSenderId: "927492787978",
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
              <LoginForm />
            </Provider>
        );
    }
}
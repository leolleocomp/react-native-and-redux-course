import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

const styles = {
  logoutButtonStyle: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null,
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCbAq6rdyqC6yA_13mUFGjqER9U24oh9vA',
      authDomain: 'auth-9027b.firebaseapp.com',
      databaseURL: 'https://auth-9027b.firebaseio.com',
      projectId: 'auth-9027b',
      storageBucket: 'auth-9027b.appspot.com',
      messagingSenderId: '898589509043',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.logoutButtonStyle}>
            <Button onPress={() => firebase.auth().signOut()} >
          Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Authentication" />
        { this.renderContent() }
      </View>
    );
  }
}
